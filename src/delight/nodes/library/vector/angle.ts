import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType } from "../../types/vector"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"

export class VectorAngleNode extends DelightNode {
    public static id = "vector.angle"
    public static listName = "Angle"

    public name = "Angle"
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
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "angle", "Angle",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const vec = await this.getInput("vec") as VectorType
        const angle = this.getOutput("angle") as NumberType
        const unit = this.getOption("unit") as SelectType

        let v = vec.value.angle

        if (unit.value === "deg")
            v *= 180 / Math.PI
        else if (unit.value === "01")
            v /= 2 * Math.PI

        angle.value = v
    }
}