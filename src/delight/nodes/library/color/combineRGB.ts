import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { NumberType } from "../../types/number"

export class CombineRGBNode extends DelightNode {
    public static id = "color.combine"
    public static listName = "Combine RGB"

    public name = "Combine RGB"
    public category: NodeCategory = NodeCategory.color

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "r", "Red",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
        ),
        new Socket(
            this,
            "g", "Green",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
        ),
        new Socket(
            this,
            "b", "Blue",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
        ),
        new Socket(
            this,
            "a", "Alpha",
            SocketType.input,
            new BoundedNumberType(1, 0, 1, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "color", "Color",
            SocketType.output,
            new ColorType(),
            false
        )
    ]

    async process() {
        const values = await Promise.all([
            this.getInput("r") as Promise<NumberType>,
            this.getInput("g") as Promise<NumberType>,
            this.getInput("b") as Promise<NumberType>,
            this.getInput("a") as Promise<NumberType>
        ])
        const out = this.getOutput("color") as ColorType

        out.value = new Color(
            values[0].value,
            values[1].value,
            values[2].value,
            values[3].value
        )
    }
}