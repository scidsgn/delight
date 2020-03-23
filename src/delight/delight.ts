// Basic bitch testing for now

import { Context } from "./context";
import { DelightNode, NodeCategory } from "./nodes/node";
import { Socket } from "./nodes/socket";
import { NumberType } from "./nodes/types/basic";
import { IDelightType } from "./nodes/types/type";

// A node that adds 1 to the input
class TestNode extends DelightNode {
    public id = "gen.testNode"

    public name = "Add 1, lol"
    public category: NodeCategory = NodeCategory.general
    
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            "num", "Number", new NumberType(0)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            "newNum",
            "Number + 1",
            new NumberType(1),
            false // Not adjustable by the user
        )
    ]
    
    async process(context: Context): Promise<void> {
        const num = await this.getInput("num", context) as NumberType
        const outSocket = this.getOutputSocket("newNum") as Socket<NumberType>

        outSocket.value.value = num.value + 1
    }
}

const ctx = new Context()

const n1 = new TestNode()
const numInput = n1.getInputSocket("num") as Socket<NumberType>
numInput.value.value = 4
ctx.addNode(n1)

const n2 = new TestNode()
ctx.addNode(n2)

ctx.connectNodes(
    n1, n1.getOutputSocket("newNum"),
    n2, n2.getInputSocket("num")
)

n2.process(ctx).then(() => {
    const outSocket = n2.getOutputSocket("newNum") as Socket<NumberType>
    console.log(outSocket.value.value)
})