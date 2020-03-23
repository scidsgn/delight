import { DelightNode } from "./nodes/node";
import { NodeConnection } from "./nodes/connection";
import { Socket } from "./nodes/socket";
import { IDelightType } from "./nodes/types/type";

export class Context {
    public nodes: DelightNode[] = []
    public connections: NodeConnection[] = []

    async getConnectionValue(
        targetNode: DelightNode,
        targetSocket: Socket<IDelightType>
    ): Promise<IDelightType> {
        const conn = this.connections.find(
            c => c.outputNode === targetNode && c.outputSocket === targetSocket
        )
        if (conn) {
            if (!conn.inputNode.isProcessed) {
                await conn.inputNode.process(this)
                conn.inputNode.isProcessed
            }
            
            return conn.inputSocket.value
        }

        return null // Not connected to any output sockets
    }

    addNode(n: DelightNode) {
        this.nodes.push(n)
    }

    connectNodes(
        inputNode: DelightNode,
        inputSocket: Socket<IDelightType>,
        outputNode: DelightNode,
        outputSocket: Socket<IDelightType>
    ) {
        this.connections.push(
            new NodeConnection(
                inputNode, inputSocket,
                outputNode, outputSocket
            )
        )
    }
}