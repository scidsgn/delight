// Basic bitch testing for now

import "./styles/layout.scss"

import { Context } from "./context"
import { DelightNode, NodeCategory } from "./nodes/node"
import { Socket, SocketType } from "./nodes/socket"
import { BoundedNumberType } from "./nodes/types/boundedNumber"
import { IDelightType } from "./nodes/types/type"
import { CommentNode } from "./nodes/library/misc/comment"
import { SelectType } from "./nodes/types/select"
import { NumberType } from "./nodes/types/number"
import { ArithmeticNode } from "./nodes/library/math/arithmetic"

// A node that adds 1 to the input
class TestNode extends DelightNode {
    public id = "gen.testNode"

    public name = "Plus minus"
    public category: NodeCategory = NodeCategory.general
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "operation",
            "Operation",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "add",
                        name: "Add 1"
                    },
                    {
                        id: "subtract",
                        name: "Subtract 1"
                    }
                ],
                "add"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "num",
            "Number",
            SocketType.input,
            new NumberType(0, 1)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "newNum",
            "Result",
            SocketType.output,
            new NumberType(0, 1),
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const operation = this.getOption("operation") as SelectType
        const num = await this.getInput("num", this.context) as NumberType
        const outSocket = this.getOutputSocket("newNum") as Socket<NumberType>

        let newNum = num.value

        if (operation.value === "add")
            newNum++
        else if (operation.value === "subtract")
            newNum--
        
        outSocket.value.value = newNum
    }
}

const ctx = new Context()
ctx.setupEvents()

const n1 = new ArithmeticNode(ctx)
ctx.addNode(n1)

const n2 = new TestNode(ctx)
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