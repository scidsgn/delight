import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { ColorType, Color } from "../../types/color"
import { BoundedNumberType } from "../../types/boundedNumber"
import { SelectType } from "../../types/select"
import * as chroma from "chroma-js"

export class BlendNode extends DelightNode {
    public static id = "color.blend"
    public static listName = "Blend"

    public name = "Blend"
    public category: NodeCategory = NodeCategory.color

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "mode",
            "Mode",
            SocketType.option,
            new SelectType(
                [
                    {
                        header: "Mix",
                        items: [
                            {
                                id: "mixRGB",
                                name: "Mix (RGB)"
                            },
                            {
                                id: "mixLCH",
                                name: "Mix (LCH)"
                            }
                        ]
                    },
                    {
                        header: "Lighten",
                        items: [
                            {
                                id: "add",
                                name: "Add"
                            }
                        ]
                    }
                ],
                "mixRGB"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "mix", "Mix",
            SocketType.input,
            new BoundedNumberType(0.5)
        ),
        new Socket(
            this,
            "c1", "Color",
            SocketType.input,
            new ColorType()
        ),
        new Socket(
            this,
            "c2", "Color",
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
        const mode = this.getOption("mode") as SelectType

        const mix = await this.getInput("mix") as BoundedNumberType
        const c1 = await this.getInput("c1") as ColorType
        const c2 = await this.getInput("c2") as ColorType
        
        const out = this.getOutput("color") as ColorType

        let v = c2.value

        if (mode.value === "mixLCH") {
            v = Color.fromChromaJS(
                chroma.mix(
                    c1.value.toChromaJS(),
                    c2.value.toChromaJS(),
                    mix.value,
                    "lch"
                )
            )
        } else if (mode.value === "add") {
            v = new Color(
                c1.value.r + c2.value.r,
                c1.value.g + c2.value.g,
                c1.value.b + c2.value.b
            )
        }

        out.value = new Color(
            c1.value.r + mix.value * (v.r - c1.value.r),
            c1.value.g + mix.value * (v.g - c1.value.g),
            c1.value.b + mix.value * (v.b - c1.value.b)
        )
    }
}