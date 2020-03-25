import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"

export class Db2VolumeNode extends DelightNode {
    public static id = "audio.db2value"
    public static listName = "dB to Intensity"

    public name = "dB to Intensity"
    public category: NodeCategory = NodeCategory.audio
    
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "db",
            "dB",
            SocketType.input,
            new NumberType(0, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "out",
            "Volume (0-1)",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const db = await this.getInput("db") as NumberType
        const out = this.getOutput("out") as NumberType

        out.value = 10 ** (db.value / 20)
    }
}