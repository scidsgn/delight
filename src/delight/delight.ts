import { Context } from "./context"
import { RazerOutputNode } from "./nodes/library/razer/output"

import "./styles/layout.scss"
import { init, uninit, putEffect, ChromaDevice } from "./chroma/chroma"
import { SelectType } from "./nodes/types/select"
import { ColorType } from "./nodes/types/color"
import { RazerInputNode } from "./nodes/library/razer/input"
import { NumberType } from "./nodes/types/number"

const ctx = new Context()
ctx.setupEvents()

const n1 = new RazerInputNode(ctx)
ctx.addNode(n1)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

const n2 = new RazerOutputNode(ctx)
ctx.addNode(n2)

n2.createDOM()
n2.setPosition(400, 16)
ctx.nodeContainer.appendChild(n2.domElement)

ctx.updateConnectionsCanvas()

const glob = window as any

let chromaTimeout: NodeJS.Timeout

glob.initChroma = () => {
    init().then(() => {
        const inputNodes = ctx.nodes.filter(
            n => n instanceof RazerInputNode
        )
        const outputNode = ctx.nodes.find(
            n => n instanceof RazerOutputNode &&
                 (n.getOption("device") as SelectType).value === "keyboard"
        )
        console.log(outputNode)
        setTimeout(() => {
            chromaTimeout = setInterval(async () => {
                const colors: number[][] = Array(6).fill(0).map(
                    x => Array(22).fill(0xFFFFFF)
                )

                for (let x = 0; x < 22; x++) {
                    for (let y = 0; y < 6; y++) {
                        ctx.resetProcessing()

                        inputNodes.forEach(
                            n => {
                                const xOut = n.getOutput("x") as NumberType
                                const yOut = n.getOutput("y") as NumberType

                                xOut.value = x / 21
                                yOut.value = y / 5
                            }
                        )

                        await outputNode.process()

                        colors[y][x] = (
                            await outputNode.getInput("color") as ColorType
                        ).value.toBGRInt()
                    }
                }

                putEffect(
                    ChromaDevice.keyboard,
                    "CHROMA_CUSTOM",
                    colors
                )

                ctx.uniforms.frame++
                ctx.uniforms.time += 1 / 30
            }, 1000 / 30)
        }, 2000)
    })
}
glob.unInitChroma = () => {
    if (chromaTimeout) clearInterval(chromaTimeout)
    uninit()
}