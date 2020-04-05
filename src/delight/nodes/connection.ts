import { DelightNode } from "./node";
import { Socket } from "./socket";
import { IDelightType } from "./types/type";

export class NodeConnection {
    constructor(
        public inputNode: DelightNode,
        public inputSocket: Socket<IDelightType>,
        public outputNode: DelightNode,
        public outputSocket: Socket<IDelightType>
    ) {}

    serialize() {
        const context = this.inputNode.context

        return {
            input: {
                node: context.nodes.indexOf(this.inputNode),
                socket: this.inputNode.outputs.indexOf(this.inputSocket)
            },
            output: {
                node: context.nodes.indexOf(this.outputNode),
                socket: this.outputNode.inputs.indexOf(this.outputSocket)
            }
        }
    }
}

export class PartialNodeConnection extends NodeConnection {
    public tailX = 0
    public tailY = 0
}