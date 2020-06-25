import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { GlyphsType } from "../../types/glyphs"
import { VectorType } from "../../types/vector"
import { NumberType } from "../../types/number"

export class FontRenderNode extends DelightNode {
    public static id = "font.render"
    public static listName = "Render"

    public name = "Render"
    public category: NodeCategory = NodeCategory.font

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "glyphs", "Glyphs",
            SocketType.input,
            new GlyphsType()
        ),
        new Socket(
            this,
            "position", "Pixel position",
            SocketType.input,
            new VectorType()
        ),
        new Socket(
            this,
            "offsetX", "X offset",
            SocketType.input,
            new NumberType(0, 1)
        ),
        new Socket(
            this,
            "offsetY", "Y offset",
            SocketType.input,
            new NumberType(0, 1)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "out", "Pixel",
            SocketType.output,
            new NumberType(),
            false
        )
    ]
    
    async process(): Promise<void> {
        const glyphs = await this.getInput("glyphs") as GlyphsType
        const pos = await this.getInput("position") as VectorType

        const offsetX = await this.getInput("offsetX") as NumberType
        const offsetY = await this.getInput("offsetY") as NumberType

        const out = this.getOutput("out") as NumberType

        let posX = pos.value.x - offsetX.value
        let posY = pos.value.y - offsetY.value

        if (
            posX < 0 || posX >= glyphs.value.length ||
            posY < 0 || posY >= 5
        ) {
            out.value = 0
        } else {
            const v = glyphs.value[Math.floor(posX)][Math.floor(posY)]
            out.value = v
        }
    }
}