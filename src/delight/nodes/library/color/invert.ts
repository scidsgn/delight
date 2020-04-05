import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"
import * as chroma from "chroma-js"

export class InvertNode extends DelightNode {
    public static id = "color.invert"
    public static listName = "Invert"

    public name = "Invert"
    public category: NodeCategory = NodeCategory.color

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "type",
            "Type",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "rgb",
                        name: "RGB"
                    },
                    {
                        id: "hsl",
                        name: "Lightness (HSL)"
                    }
                ],
                "rgb"
            ),
            true,
            false
        )
    ]
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
        const type = this.getOption("type") as SelectType

        const color = await this.getInput("color") as ColorType
        const colorOut = this.getOutput("color") as ColorType

        if (type.value === "hsl") {
            const hsl = color.value.toChromaJS().hsl()
            const c = Color.fromChromaJS(
                chroma.hsl(
                    hsl[0], hsl[1], 1 - hsl[2]
                )
            )
            c.a = color.value.a

            colorOut.value = c
        } else
            colorOut.value = new Color(
                1 - color.value.r,
                1 - color.value.g,
                1 - color.value.b,
                color.value.a
            )
    }
}