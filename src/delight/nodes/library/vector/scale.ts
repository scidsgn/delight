import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType, Vector } from "../../types/vector"
import { NumberType } from "../../types/number"

export class VectorScaleNode extends DelightNode {
    public static id = "vector.scale"
    public static listName = "Scale"

    public name = "Scale"
    public category: NodeCategory = NodeCategory.vector

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
            "scale", "Scale",
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
        const scale = await this.getInput("scale") as NumberType
        const vecOut = this.getOutput("vec") as VectorType

        vecOut.value = new Vector(
            vec.value.x * scale.value,
            vec.value.y * scale.value
        )
    }
}