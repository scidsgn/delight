import "./styles/layout.scss"
import { RazerOutputNode } from "./nodes/library/razer/output"
import { Context } from "./context"
import { ArithmeticNode } from "./nodes/library/number/arithmetic"
import { CommentNode } from "./nodes/library/misc/comment"
import { Socket } from "./nodes/socket"
import { BoundedNumberType } from "./nodes/types/boundedNumber"
import { ViewerNode } from "./nodes/library/misc/viewer"
import { ColorValueNode } from "./nodes/library/color/color"
import { CombineRGBNode } from "./nodes/library/color/combine"

const ctx = new Context()
ctx.setupEvents()

const n1 = new ArithmeticNode(ctx)
ctx.addNode(n1)

const n2 = new RazerOutputNode(ctx)
ctx.addNode(n2)

const n3 = new CombineRGBNode(ctx)
ctx.addNode(n3)

const n4 = new ViewerNode(ctx)
ctx.addNode(n4)

const n5 = new ColorValueNode(ctx)
ctx.addNode(n5)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

n2.createDOM()
n2.setPosition(200, 16)
ctx.nodeContainer.appendChild(n2.domElement)

n3.createDOM()
n3.setPosition(16, 300)
ctx.nodeContainer.appendChild(n3.domElement)

n4.createDOM()
n4.setPosition(200, 300)
ctx.nodeContainer.appendChild(n4.domElement)

n5.createDOM()
n5.setPosition(400, 300)
ctx.nodeContainer.appendChild(n5.domElement)

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