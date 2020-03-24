import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"

export class FrameNode extends DelightNode {
    public static id = "time.frame"
    public static listName = "Frame #"

    public name = "Frame #"
    public category: NodeCategory = NodeCategory.time

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "frame", "Frame #",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const out = this.getOutput("frame") as NumberType

        out.value = this.context.uniforms.frame
    }
}