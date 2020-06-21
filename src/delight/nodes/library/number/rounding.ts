import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class RoundingNode extends DelightNode {
    public static id = "number.rounding"
    public static listName = "Rounding"

    public name = "Rounding"
    public category: NodeCategory = NodeCategory.number
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "operation",
            "Operation",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "round",
                        name: "Round"
                    },
                    {
                        id: "floor",
                        name: "Floor"
                    },
                    {
                        id: "ceil",
                        name: "Ceiling"
                    },
                    {
                        id: "abs",
                        name: "Absolute"
                    }
                ],
                "round"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "num",
            "Number",
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
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const operation = this.getOption("operation") as SelectType

        const num = await this.getInput("num") as NumberType

        const out = this.getOutput("result") as NumberType

        let newNum = 0

        if (operation.value === "round")
            newNum = Math.round(num.value)
        else if (operation.value === "floor")
            newNum = Math.floor(num.value)
        else if (operation.value === "ceil")
            newNum = Math.ceil(num.value)
        else if (operation.value === "abs")
            newNum = Math.abs(num.value)
        
        out.value = newNum
    }
}