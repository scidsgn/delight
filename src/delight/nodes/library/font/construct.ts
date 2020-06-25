import { DelightNode, NodeCategory, UniformNode } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { StringType } from "../../types/string"
import { GlyphsType } from "../../types/glyphs"
import chromatica from "../../../font/fonts/chromatica"

export class FontConstructNode extends UniformNode {
    public static id = "font.construct"
    public static listName = "Construct"

    public name = "Construct"
    public category: NodeCategory = NodeCategory.font

    private font = chromatica

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "before", "Previous glyphs",
            SocketType.input,
            new GlyphsType()
        ),
        new Socket(
            this,
            "string", "String",
            SocketType.input,
            new StringType()
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "out", "Glyphs",
            SocketType.output,
            new GlyphsType(),
            false
        )
    ]
    
    async processOnce(): Promise<void> {
        const prevGlyphs = await this.getInput("before") as GlyphsType
        const str = await this.getInput("string") as StringType

        const out = this.getOutput("out") as GlyphsType
        
        out.value = this.font.constructString(
            prevGlyphs.value,
            str.value
        )
    }
}