import { RazerOutputNode } from "../nodes/library/razer/output"
import { Context } from "../context"
import { ChromaDevice, init, uninit, putEffect } from "./chroma"
import { SelectType } from "../nodes/types/select"
import { ViewerNode } from "../nodes/library/misc/viewer"
import { ColorType } from "../nodes/types/color"
import { RazerInputNode } from "../nodes/library/razer/input"
import { NumberType } from "../nodes/types/number"

export class ChromaExecutor {
    private _running = false
    private context: Context

    private outputNodes: RazerOutputNode[]

    private timeout: NodeJS.Timeout

    constructor(
        public framerate: number
    ) {}

    get running() {
        return this._running
    }

    async execute() {
        await this.context.processUniform()

        await Promise.all(
            this.context.nodes.filter(
                n => n instanceof ViewerNode
            ).map(
                n => (n as ViewerNode).handleButtonPress(null)
            )
        )

        const inputNodes = this.context.nodes.filter(
            n => n instanceof RazerInputNode
        )

        for (let output of this.outputNodes) {
            const w = 22, h = 6
            const colors: number[][] = Array(h).fill(0).map(
                x => Array(w).fill(0xFFFFFF)
            )

            for (let x = 0; x < w; x++) {
                for (let y = 0; y < h; y++) {
                    this.context.resetProcessing()

                    inputNodes.forEach(
                        n => {
                            const xOut = n.getOutput("x") as NumberType
                            const yOut = n.getOutput("y") as NumberType

                            xOut.value = x / (w - 1)
                            yOut.value = y / (h - 1)
                        }
                    )

                    await output.process()

                    colors[y][x] = (
                        await output.getInput("color") as ColorType
                    ).value.toBGRInt()
                }
            }

            putEffect(
                ChromaDevice.keyboard,
                "CHROMA_CUSTOM",
                colors
            )
        }

        this.context.uniforms.frame++
        this.context.uniforms.time += 1 / this.framerate

        this.timeout = setTimeout(
            () => this.execute(),
            1000 / this.framerate
        )
    }

    startExecution(context: Context) {
        this.outputNodes = context.nodes.filter(
            n => n instanceof RazerOutputNode
        )
        const devices: ChromaDevice[] = this.outputNodes.map(
            n => (n.getOption("device") as SelectType).value as ChromaDevice
        )

        init(devices).then((enabled) => {
            if (!enabled) return

            this.outputNodes.forEach(n => n.locked = true)
            this.context = context

            this._running = true

            setTimeout(() => {
                this.execute()
            }, 100)
        })
    }

    stopExecution() {
        if (!this._running) return

        uninit().then(() => {
            this.outputNodes.forEach(n => n.locked = false)
            this.context = null
            this._running = false

            clearTimeout(this.timeout)
            this.timeout = null
        })
    }
}