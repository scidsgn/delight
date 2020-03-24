import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { NumberType } from "../../types/number"

export class SeparateRGBNode extends DelightNode {
    public static id = "color.separate"
    public static listName = "Separate RGB"

    public name = "Separate RGB"
    public category: NodeCategory = NodeCategory.color

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "color", "Color",
            SocketType.input,
            new ColorType()
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "r", "Red",
            SocketType.output,
            new NumberType(),
            false
        ),
        new Socket(
            this,
            "g", "Green",
            SocketType.output,
            new NumberType(),
            false
        ),
        new Socket(
            this,
            "b", "Blue",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    async process() {
        const color = await this.getInput("color") as ColorType

        const r = this.getOutput("r") as NumberType
        const g = this.getOutput("g") as NumberType
        const b = this.getOutput("b") as NumberType

        r.value = color.value.r
        g.value = color.value.g
        b.value = color.value.b
    }
}