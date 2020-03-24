import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class MapRangeNode extends DelightNode {
    public static id = "number.mapRange"
    public static listName = "Map Range"

    public name = "Map Range"
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
            "srcMin",
            "Source min",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "srcMax",
            "Source max",
            SocketType.input,
            new NumberType(1, 0.01)
        ),
        new Socket(
            this,
            "targetMin",
            "Target min",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "targetMax",
            "Target max",
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

        const smin = await this.getInput("srcMin") as NumberType
        const smax = await this.getInput("srcMax") as NumberType
        const tmin = await this.getInput("targetMin") as NumberType
        const tmax = await this.getInput("targetMax") as NumberType

        let nrmValue = (value.value - smin.value) / (smax.value - smin.value)
        if (isNaN(nrmValue)) nrmValue = 0

        const out = this.getOutput("result") as NumberType

        out.value = tmin.value + nrmValue * (tmax.value - tmin.value)
    }
}