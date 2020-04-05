import { IDelightType } from "./type"
import * as chroma from "chroma-js"

import "../../styles/types/color.scss"

export class Color {
    constructor(
        public r = 0,
        public g = 0,
        public b = 0,
        public a = 1
    ) {}

    get premultiplied() {
        return new Color(
            this.r * this.a,
            this.g * this.a,
            this.b * this.a,
            this.a
        )
    }

    toChromaJS() {
        return chroma.gl(
            this.r, this.g, this.b, this.a
        )
    }

    toHex() {
        const c = this.premultiplied
        const rgb = [
            c.r, c.g, c.b
        ].map(
            x => Math.max(Math.min(Math.round(255 * x), 255), 0).toString(16).padStart(2, "0")
        )

        return `#${rgb.join("")}`
    }

    toBGRInt() {
        const c = this.premultiplied
        const rgb = [
            c.r, c.g, c.b
        ].map(
            x => Math.max(Math.min(255 * x, 255), 0)
        )

        return rgb[0] | (rgb[1] << 8) | (rgb[2] << 16)
    }

    static fromChromaJS(c: chroma.Color) {
        const rgb = c.gl()
        return new Color(
            rgb[0], rgb[1], rgb[2], rgb[3]
        )
    }

    static fromHex(hex: string) {
        const rgb = [
            hex.substring(1, 3),
            hex.substring(3, 5),
            hex.substring(5, 7),
        ].map(str => parseInt(str, 16) / 255)

        return new Color(
            rgb[0], rgb[1], rgb[2]
        )
    }
}

export class ColorType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "color"
    public accepts = [this.typeId]

    constructor(
        private _value = new Color()
    ) {
        this.createDOM()
    }

    get value() {
        return this._value
    }

    set value(v: Color) {
        this._value = v

        this.updateDOM()
    }

    deserialize(data: any) {
        this.value = new Color(
            data.r, data.g, data.b, data.a
        )
    }

    serialize(): any {
        return {
            r: this._value.r,
            g: this._value.g,
            b: this._value.b,
            a: this._value.a
        }
    }

    updateDOM() {
        const input = this.domElement.querySelector("input")
        input.value = this._value.toHex()
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const input = document.createElement("input")
        input.type = "color"

        input.value = this._value.toHex()

        input.addEventListener("input", () => {
            this.value = Color.fromHex(input.value)

            dispatchEvent(
                new CustomEvent("contextModified")
            )
        })
        
        div.appendChild(input)

        this.domElement = div
        this.updateDOM()
    }
}
