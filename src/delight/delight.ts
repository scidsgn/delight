import "./styles/layout.scss"
import { RazerOutputNode } from "./nodes/library/razer/output"
import { Context } from "./context"
import { ArithmeticNode } from "./nodes/library/math/arithmetic"
import { CommentNode } from "./nodes/library/misc/comment"
import { Socket } from "./nodes/socket"
import { BoundedNumberType } from "./nodes/types/boundedNumber"

const ctx = new Context()
ctx.setupEvents()

const n1 = new ArithmeticNode(ctx)
ctx.addNode(n1)

const n2 = new RazerOutputNode(ctx)
ctx.addNode(n2)

const n3 = new CommentNode(ctx)
ctx.addNode(n3)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

n2.createDOM()
n2.setPosition(200, 16)
ctx.nodeContainer.appendChild(n2.domElement)

n3.createDOM()
n3.setPosition(16, 300)
ctx.nodeContainer.appendChild(n3.domElement)

ctx.updateConnectionsCanvas()

const glob = window as any
glob.evaluate = async () => {
    ctx.resetProcessing()
    await n2.process()
    
    const outSocket = n2.getOutputSocket("newNum") as Socket<BoundedNumberType>

    return outSocket.value.value
}