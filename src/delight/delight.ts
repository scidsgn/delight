import { Context } from "./context"
import { RazerOutputNode } from "./nodes/library/razer/output"

import "./styles/layout.scss"

const ctx = new Context()
ctx.setupEvents()

const n1 = new RazerOutputNode(ctx)
ctx.addNode(n1)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

ctx.updateConnectionsCanvas()

const glob = window as any
glob.evaluate = async () => {
    ctx.resetProcessing()

    const nodesToProcess = ctx.nodes.filter(
        n => n instanceof RazerOutputNode
    )
    await Promise.all(
        nodesToProcess.map(
            n => n.process()
        )
    )
}