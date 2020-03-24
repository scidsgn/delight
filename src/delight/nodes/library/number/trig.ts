import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class TrigNode extends DelightNode {
    public static id = "number.trig"
    public static listName = "Trigonometry"

    public name = "Trigonometry"
    public category: NodeCategory = NodeCategory.number
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "func",
            "Function",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "sin",
                        name: "Sine"
                    },
                    {
                        id: "cos",
                        name: "Cosine"
                    },
                    {
                        id: "tan",
                        name: "Tangent"
                    },
                ],
                "sin"
            ),
            true,
            false
        ),
        new Socket(
            this,
            "unit",
            "Unit",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "rad",
                        name: "Radians"
                    },
                    {
                        id: "deg",
                        name: "Degrees"
                    },
                    {
                        id: "01",
                        name: "Circle frac. (0-1)"
                    },
                ],
                "rad"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "angle",
            "Angle",
            SocketType.input,
            new NumberType(0, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "result",
            "Result",
            SocketType.output,
            new NumberType(0, 0.01),
            false
        )
    ]
    
    async process(): Promise<void> {
        const func = this.getOption("func") as SelectType
        const unit = this.getOption("unit") as SelectType

        const angle = await this.getInput("angle") as NumberType

        const out = this.getOutput("result") as NumberType

        let convAngle = angle.value
        if (unit.value === "deg")
            convAngle *= Math.PI / 180
        else if (unit.value === "01")
            convAngle *= 2 * Math.PI
        
        if (func.value === "sin")
            out.value = Math.sin(convAngle)
        else if (func.value === "cos")
            out.value = Math.cos(convAngle)
        else if (func.value === "tan")
            out.value = Math.tan(convAngle)
    }
}