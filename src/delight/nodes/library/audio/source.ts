import { NodeCategory, UniformNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { FFTType } from "../../types/fft"

export class AudioSourceNode extends UniformNode {
    public static id = "audio.source"
    public static listName = "Audio Source"

    public name = "Audio Source"
    public category: NodeCategory = NodeCategory.audio

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "fft", "FFT",
            SocketType.output,
            new FFTType(64),
            false
        )
    ]

    async processOnce() {
        const out = this.getOutput("fft") as FFTType
        this.context.acsAnalyzerNode.getFloatFrequencyData(
            out.value
        )
    }
}