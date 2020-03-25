import { NodeCategory, UniformNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { FFTType } from "../../types/fft"
import { NumberType } from "../../types/number"

export class AudioPeakNode extends UniformNode {
    public static id = "audio.peak"
    public static listName = "Peak"

    public name = "Peak"
    public category: NodeCategory = NodeCategory.audio

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "fft", "FFT",
            SocketType.input,
            new FFTType(64),
            false
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "freq",
            "Frequency",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        ),
        new Socket(
            this,
            "ampl",
            "Amplitude",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]

    async processOnce() {
        const fft = await this.getInput("fft") as FFTType

        const freq = this.getOutput("freq") as NumberType
        const ampl = this.getOutput("ampl") as NumberType

        let maxAmpl = -Infinity
        let maxIdx = -1

        for (let i = 0; i < fft.length; i++) {
            let vDb = fft.value[i]

            if (vDb > maxAmpl) {
                maxAmpl = vDb
                maxIdx = i
            }
        }

        ampl.value = maxAmpl
        freq.value = (this.context.audioContext.sampleRate / 2) * maxIdx / (fft.length - 1)
    }
}