import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType } from "../../types/vector"
import { NumberType } from "../../types/number"

export class VectorLengthNode extends DelightNode {
    public static id = "vector.length"
    public static listName = "Length"

    public name = "Length"
    public category: NodeCategory = NodeCategory.vector

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
            "len", "Length",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const vec = await this.getInput("vec") as VectorType
        const len = this.getOutput("len") as NumberType

        len.value = vec.value.length
    }
}