import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType, Vector } from "../../types/vector"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"

export class VectorRotateNode extends DelightNode {
    public static id = "vector.rotate"
    public static listName = "Rotate"

    public name = "Rotate"
    public category: NodeCategory = NodeCategory.vector

    public options: Socket<IDelightType>[] = [
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
            "vec", "Vector",
            SocketType.input,
            new VectorType(),
            false
        ),
        new Socket(
            this,
            "angle", "Angle",
            SocketType.input,
            new NumberType()
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "vec", "Vector",
            SocketType.output,
            new VectorType(),
            false
        )
    ]

    async process() {
        const vec = await this.getInput("vec") as VectorType
        const angle = await this.getInput("angle") as NumberType
        const vecOut = this.getOutput("vec") as VectorType
        const unit = this.getOption("unit") as SelectType

        const length = vec.value.length
        let dAngle = angle.value

        if (unit.value === "deg")
            dAngle *= Math.PI / 180
        else if (unit.value === "01")
            dAngle *= Math.PI * 2

        dAngle += vec.value.angle

        vecOut.value = new Vector(
            length * Math.cos(dAngle),
            length * Math.sin(dAngle)
        )
    }
}