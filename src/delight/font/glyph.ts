export type FontGlyphColumn = (0 | 1)[]

export class FontGlyph {
    constructor(
        public character: string,
        private leftSide: FontGlyphColumn = null,
        private leftSideBold: FontGlyphColumn = null,
        private left: FontGlyphColumn = null,
        private middle: FontGlyphColumn = null,
        private middleBold: FontGlyphColumn = null,
        private right: FontGlyphColumn = null,
        private rightSideBold: FontGlyphColumn = null,
        private rightSide: FontGlyphColumn = null
    ) {}

    construct(width = 1, bold = false): FontGlyphColumn[] {
        const glyph: FontGlyphColumn[] = []

        if (this.leftSide) glyph.push(this.leftSide)
        if (this.leftSideBold && bold) glyph.push(this.leftSideBold)

        if (this.left) {
            for (let i = 0; i < width; i++) {
                glyph.push(this.left)
            }
        }

        if (this.middle) glyph.push(this.middle)
        if (this.middleBold && bold) glyph.push(this.middleBold)

        if (this.right) {
            for (let i = 0; i < width; i++) {
                glyph.push(this.right)
            }
        }

        if (this.rightSideBold && bold) glyph.push(this.rightSideBold)
        if (this.rightSide) glyph.push(this.rightSide)

        return glyph
    }
}