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
            new FFTType(128),
            false
        )
    ]

    async processOnce() {
        const out = this.getOutput("fft") as FFTType
        this.context.acsAnalyzerNode.getFloatFrequencyData(
            out.value
        )

        for (let i = 0; i < out.length; i++) {
            out.value[i] = (out.value[i] - this.context.acsAnalyzerNode.minDecibels) / (this.context.acsAnalyzerNode.maxDecibels - this.context.acsAnalyzerNode.minDecibels)
        }

        let leftMin = Infinity, leftMax = -Infinity
        let rightMin = Infinity, rightMax = -Infinity

        for (let i = 0; i < out.length / 4; i++) {
            leftMin = Math.min(leftMin, out.value[i])
            leftMax = Math.max(leftMax, out.value[i])

            rightMin = Math.min(rightMin, out.value[out.length - i - 1])
            rightMax = Math.max(rightMax, out.value[out.length - i - 1])
        }

        for (let i = 0; i < out.length; i++) {
            const x = i / (out.length - 1)
            const min = leftMin + x * (rightMin - leftMin)
            const max = leftMax + x * (rightMax - leftMax)

            out.value[i] = (out.value[i] - min) / (max - min)
        }

        let totalMin = Infinity, totalMax = -Infinity
        for (let i = 0; i < out.length; i++) {
            totalMin = Math.min(totalMin, out.value[i])
            totalMax = Math.max(totalMax, out.value[i])
        }
        for (let i = 0; i < out.length; i++) {
            out.value[i] = (out.value[i] - totalMin) / (totalMax - totalMin)
            if (isNaN(out.value[i])) out.value[i] = 0
        }
    }
}