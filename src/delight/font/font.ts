import { FontGlyph, FontGlyphColumn } from "./glyph"

export class Font {
    constructor(
        public name: string,
        private glyphs: FontGlyph[],
        private caseSensitive = false
    ) {}

    findGlyph(character: string): FontGlyph {
        if (this.caseSensitive)
            return this.glyphs.find(g => g.character == character)
        else
            return this.glyphs.find(g => g.character.toLowerCase() == character.toLowerCase())

        return null
    }

    constructString(text: string, width = 1, bold = false): FontGlyphColumn[] {
        const glyphs: FontGlyphColumn[] = []

        text.split("").forEach(chr => {
            const glyph = this.findGlyph(chr)
            if (glyph) {
                glyphs.push(...glyph.construct(width, bold))
                glyphs.push([0, 0, 0, 0, 0])
            }
        })

        return glyphs
    }
}