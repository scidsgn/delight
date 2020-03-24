import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class LoopNode extends DelightNode {
    public static id = "number.loop"
    public static listName = "Loop"

    public name = "Loop"
    public category: NodeCategory = NodeCategory.number

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "type",
            "Type",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "repeat",
                        name: "Repeat"
                    },
                    {
                        id: "pingpong",
                        name: "Ping-Pong"
                    }
                ],
                "repeat"
            ),
            true,
            false
        )
    ]    
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
            "start",
            "Start",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "length",
            "Length",
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
        const type = await this.getOption("type") as SelectType

        const value = await this.getInput("value") as NumberType
        const start = await this.getInput("start") as NumberType
        const length = await this.getInput("length") as NumberType

        const out = this.getOutput("result") as NumberType
        
        let v = 0

        if (type.value === "repeat") {
            v = (value.value - start.value) % length.value
            if (v < 0) v += length.value

            out.value = v
        } else if (type.value === "pingpong") {
            v = (value.value - start.value) % (2 * length.value)
            if (v < 0) v += 2 * length.value
            if (v > length.value) {
                v = 2 * length.value - v
            }

            out.value = v
        }
    }
}