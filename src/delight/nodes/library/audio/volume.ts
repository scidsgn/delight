import { NodeCategory, UniformNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { FFTType } from "../../types/fft"
import { NumberType } from "../../types/number"

export class AudioVolumeNode extends UniformNode {
    public static id = "audio.volume"
    public static listName = "Volume"

    public name = "Volume"
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
            "vol",
            "Volume",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]

    async processOnce() {
        const fft = await this.getInput("fft") as FFTType
        const out = this.getOutput("vol") as NumberType

        let vol = 0

        for (let i = 0; i < fft.length; i++) {
            let db = fft.value[i]

            vol += 10 ** (db / 20)
        }

        out.value = vol / fft.length
    }
}