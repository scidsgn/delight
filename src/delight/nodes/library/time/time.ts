import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"

export class TimeNode extends DelightNode {
    public static id = "time.time"
    public static listName = "Time [s]"

    public name = "Time [s]"
    public category: NodeCategory = NodeCategory.number

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "time", "Time",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const out = this.getOutput("time") as NumberType

        out.value = this.context.uniforms.time
    }
}