// Basic bitch testing for now

import "./styles/layout.scss"

import { Context } from "./context"
import { DelightNode, NodeCategory } from "./nodes/node"
import { Socket, SocketType } from "./nodes/socket"
import { NumberType } from "./nodes/types/number"
import { IDelightType } from "./nodes/types/type"

// A node that adds 1 to the input
class TestNode extends DelightNode {
    public id = "gen.testNode"

    public name = "Add 1, lol"
    public category: NodeCategory = NodeCategory.general
    
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "num",
            "Number",
            SocketType.input,
            new NumberType(0, 0, 10, 1)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "newNum",
            "Number + 1",
            SocketType.output,
            new NumberType(1),
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const num = await this.getInput("num", this.context) as NumberType
        const outSocket = this.getOutputSocket("newNum") as Socket<NumberType>

        outSocket.value.value = num.value + 1
    }
}

const ctx = new Context()
ctx.setupEvents()

const n1 = new TestNode(ctx)
const numInput = n1.getInputSocket("num") as Socket<NumberType>
numInput.value.value = 4
ctx.addNode(n1)

const n2 = new TestNode(ctx)
ctx.addNode(n2)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

n2.createDOM()
n2.setPosition(200, 16)
ctx.nodeContainer.appendChild(n2.domElement)

ctx.updateConnectionsCanvas()

const glob = window as any
glob.evaluate = async () => {
    ctx.resetProcessing()
    await n2.process()
    
    const outSocket = n2.getOutputSocket("newNum") as Socket<NumberType>

    return outSocket.value.value
}