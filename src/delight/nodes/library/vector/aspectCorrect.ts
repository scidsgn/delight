import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType, Vector } from "../../types/vector"
import { NumberType } from "../../types/number"

export class VectorAspectCorrectNode extends DelightNode {
    public static id = "vector.aspcorrect"
    public static listName = "Aspect Ratio Correct"

    public name = "Aspect Ratio Correct"
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
            "ratio", "Aspect ratio",
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
        const ratio = await this.getInput("ratio") as NumberType
        const vecOut = this.getOutput("vec") as VectorType

        let w = 1, h = 1

        if (ratio.value > 1) {
            h = 1 / ratio.value
        } else {
            w = ratio.value
        }

        vecOut.value = new Vector(
            vec.value.x * w + (1 - w) / 2,
            vec.value.y * h + (1 - h) / 2
        )
    }
}