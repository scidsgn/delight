import { DelightNode, NodeCategory, UniformNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { FFTType } from "../../types/fft"

import "../../../styles/ui/fftPreview.scss"

export class AudioPreviewNode extends UniformNode {
    public static id = "audio.preview"
    public static listName = "Audio Preview"

    public name = "Audio Preview"
    public category: NodeCategory = NodeCategory.audio

    public fftPreviewDOM: HTMLDivElement
    public fftPreviewCanvas: HTMLCanvasElement

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "fft", "FFT",
            SocketType.input,
            new FFTType(64),
            false
        )
    ]

    createDOM() {
        super.createDOM()

        this.domElement.style.width = `unset`

        const options = this.domElement.querySelector("div.options") as HTMLDivElement

        options.style.display = "flex"

        this.fftPreviewDOM = document.createElement("div")
        this.fftPreviewDOM.classList.add("fftPreview")

        this.fftPreviewCanvas = document.createElement("canvas")
        this.fftPreviewCanvas.width = 256
        this.fftPreviewCanvas.height = 128

        this.fftPreviewDOM.appendChild(this.fftPreviewCanvas)

        this.domElement.appendChild(this.fftPreviewDOM)
    }

    async processOnce() {
        const fft = await this.getInput("fft") as FFTType

        const ctx = this.fftPreviewCanvas.getContext("2d")
        ctx.clearRect(0, 0, 256, 128)

        ctx.beginPath()
        for (let i = 0; i < fft.length; i++) {
            const x = 256 * i / (fft.length - 1)
            const y = 128 * (1 - fft.value[i])

            if (i)
                ctx.lineTo(x, y)
            else
                ctx.moveTo(x, y)
        }

        ctx.strokeStyle = "#FFF";
        ctx.stroke()
    }
}