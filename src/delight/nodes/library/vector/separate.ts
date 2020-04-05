import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType } from "../../types/vector"
import { NumberType } from "../../types/number"

export class SeparateVectorNode extends DelightNode {
    public static id = "vector.separate"
    public static listName = "Separate Vector"

    public name = "Separate Vector"
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
            "x", "X",
            SocketType.output,
            new NumberType(),
            false
        ),
        new Socket(
            this,
            "y", "Y",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const vec = await this.getInput("vec") as VectorType

        const x = this.getOutput("x") as NumberType
        const y = this.getOutput("y") as NumberType

        x.value = vec.value.x
        y.value = vec.value.y
    }
}