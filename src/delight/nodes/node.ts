import { Socket } from "./socket"
import { Context } from "../context"
import { IDelightType } from "./types/type"

export enum NodeCategory {
    general
}

export class DelightNode {
    public id = "gen.blankNode"

    public name = "Node"
    public category: NodeCategory = NodeCategory.general

    // Do not touch this! This will be handled by the Context
    public isProcessed = false
    
    public inputs: Socket<IDelightType>[] = []
    public outputs: Socket<IDelightType>[] = []
    public options: Socket<IDelightType>[] = []

    getInputSocket(id: string): Socket<IDelightType> {
        return this.inputs.find(s => s.id === id)
    }

    getOutputSocket(id: string): Socket<IDelightType> {
        return this.outputs.find(s => s.id === id)
    }
    
    async getInput(id: string, ctx: Context): Promise<IDelightType> {
        const socket = this.getInputSocket(id)
        if (!socket) throw "what the fuck"

        const connValue = await ctx.getConnectionValue(this, socket)
        if (connValue !== null) return connValue
        
        return socket.value
    }

    async process(context: Context): Promise<void> {}
}