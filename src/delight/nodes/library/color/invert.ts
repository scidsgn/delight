import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { NumberType } from "../../types/number"

export class InvertNode extends DelightNode {
    public static id = "color.invert"
    public static listName = "Invert"

    public name = "Invert"
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
            "color", "Color",
            SocketType.output,
            new ColorType(),
            false
        )
    ]

    async process() {
        const color = await this.getInput("color") as ColorType
        const colorOut = this.getOutput("color") as ColorType

        colorOut.value = new Color(
            1 - color.value.r,
            1 - color.value.g,
            1 - color.value.b,
            color.value.a
        )
    }
}