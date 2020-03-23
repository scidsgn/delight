import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"

export class RandomNumberNode extends DelightNode {
    public static id = "number.random"
    public static listName = "Random"

    public name = "Random"
    public category: NodeCategory = NodeCategory.number

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "number", "Number",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const out = this.getOutput("number") as NumberType

        out.value = Math.random()
    }
}