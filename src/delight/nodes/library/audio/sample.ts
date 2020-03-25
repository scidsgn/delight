import { NodeCategory, DelightNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { FFTType } from "../../types/fft"
import { NumberType } from "../../types/number"

export class AudioSampleNode extends DelightNode {
    public static id = "audio.sample"
    public static listName = "Sample"

    public name = "Sample"
    public category: NodeCategory = NodeCategory.audio

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "fft", "FFT",
            SocketType.input,
            new FFTType(64),
            false
        ),
        new Socket(
            this,
            "freq",
            "Frequency",
            SocketType.input,
            new NumberType(0, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "ampl",
            "Amplitude",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]

    async process() {
        const fft = await this.getInput("fft") as FFTType
        const freq = await this.getInput("freq") as NumberType

        const ampl = this.getOutput("ampl") as NumberType

        const index = (2 * freq.value / this.context.audioContext.sampleRate) * (fft.length - 1)
        const idxMin = Math.floor(index)
        const idxMax = Math.ceil(index)

        const minValue = fft.value[idxMin]
        const maxValue = fft.value[idxMax]

        let outValue = 0

        if (idxMin === index) {
            outValue = minValue
        } else {
            outValue = minValue + (index - idxMin) * (maxValue - minValue)
        }

        ampl.value = outValue
    }
}