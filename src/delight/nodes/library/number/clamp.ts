import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class ClampNode extends DelightNode {
    public static id = "number.clamp"
    public static listName = "Clamp"

    public name = "Clamp"
    public category: NodeCategory = NodeCategory.number
    
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "value",
            "Value",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "min",
            "Min",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "max",
            "Max",
            SocketType.input,
            new NumberType(1, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "result",
            "Result",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const value = await this.getInput("value") as NumberType
        const min = await this.getInput("min") as NumberType
        const max = await this.getInput("max") as NumberType

        const out = this.getOutput("result") as NumberType

        out.value = Math.min(
            Math.max(value.value, min.value), max.value
        )
    }
}