import { RazerOutputNode } from "../nodes/library/razer/output"
import { Context } from "../context"
import { ChromaDeviceType, init, uninit, putEffect } from "./chroma"
import { SelectType } from "../nodes/types/select"
import { ViewerNode } from "../nodes/library/misc/viewer"
import { ColorType } from "../nodes/types/color"
import { RazerInputNode } from "../nodes/library/razer/input"
import { NumberType } from "../nodes/types/number"
import ornata from "./devices/keyboards/ornata"
import { ChromaEnvironment } from "./environment"

export class ChromaExecutor {
    private _running = false
    private context: Context

    private outputNodes: RazerOutputNode[]

    private timeout: NodeJS.Timeout

    constructor(
        public environment: ChromaEnvironment,
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

        const outputArrays: {
            [p: string]: number[][]
        } = {
            "keyboard": Array(6).fill(0).map(
                x => Array(22).fill(0)
            )
        }

        for (let output of this.outputNodes) {
            const target: number[][] = outputArrays[
                output.device.type as ChromaDeviceType
            ]

            for (let entity of output.region.entities) {
                this.context.resetProcessing()

                inputNodes.forEach(
                    n => {
                        const xOut = n.getOutput("x") as NumberType
                        const yOut = n.getOutput("y") as NumberType

                        xOut.value = entity.arrayX
                        yOut.value = entity.arrayY
                    }
                )

                await output.process()

                target[entity.arrayY][entity.arrayX] = (
                    await output.getInput("color") as ColorType
                ).value.toBGRInt()
            }
        }

        Object.keys(outputArrays).forEach(devType => {
            putEffect(
                devType as ChromaDeviceType,
                "CHROMA_CUSTOM",
                outputArrays[devType]
            )
        })

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
        ) as RazerOutputNode[]

        init([
            ChromaDeviceType.keyboard
        ]).then((enabled) => {
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