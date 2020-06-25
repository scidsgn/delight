import { IDelightType } from "./type"
import { FontGlyphColumn } from "../../font/glyph"

import "../../styles/types/glyphs.scss"

export class GlyphsType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "glyphs"
    public accepts = [this.typeId]

    public value: FontGlyphColumn[]

    constructor() {
        this.value = []
        this.createDOM()
    }

    deserialize(data: any) {
        this.value = []
    }

    serialize(): any {
        return null
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        this.domElement = div
    }
}
