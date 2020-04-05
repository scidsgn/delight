import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { VectorType, Vector } from "../../types/vector"

export class CombineVectorNode extends DelightNode {
    public static id = "vector.combine"
    public static listName = "Combine Vector"

    public name = "Combine Vector"
    public category: NodeCategory = NodeCategory.vector

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "x", "X",
            SocketType.input,
            new NumberType(0)
        ),
        new Socket(
            this,
            "y", "Y",
            SocketType.input,
            new NumberType(0)
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
        const values = await Promise.all([
            this.getInput("x") as Promise<NumberType>,
            this.getInput("y") as Promise<NumberType>
        ])
        const out = this.getOutput("vec") as VectorType

        out.value = new Vector(
            values[0].value,
            values[1].value
        )
    }
}