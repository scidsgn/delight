import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { NumberType } from "../../types/number"
import * as chroma from "chroma-js"
import { SelectType } from "../../types/select"

export class CombineHSLNode extends DelightNode {
    public static id = "color.combineHSL"
    public static listName = "Combine HSL"

    public name = "Combine HSL"
    public category: NodeCategory = NodeCategory.color

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "unit",
            "Unit",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "rad",
                        name: "Radians"
                    },
                    {
                        id: "deg",
                        name: "Degrees"
                    },
                    {
                        id: "01",
                        name: "Circle frac. (0-1)"
                    },
                ],
                "01"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "h", "Hue",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
        ),
        new Socket(
            this,
            "s", "Saturation",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
        ),
        new Socket(
            this,
            "l", "Lightness",
            SocketType.input,
            new BoundedNumberType(0.5, 0, 1, 0.01)
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
            this.getInput("h") as Promise<NumberType>,
            this.getInput("s") as Promise<NumberType>,
            this.getInput("l") as Promise<NumberType>
        ])
        const unit = this.getOption("unit") as SelectType
        const out = this.getOutput("color") as ColorType

        let hue = values[0].value

        if (unit.value === "deg")
            hue /= 360
        else if (unit.value === "rad")
            hue /= 2 * Math.PI

        out.value = Color.fromChromaJS(
            chroma.hsl(
                hue * 360,
                values[1].value,
                values[2].value
            )
        )
    }
}