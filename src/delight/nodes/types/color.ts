import { IDelightType } from "./type"

import "../../styles/types/color.scss"

export class Color {
    constructor(
        public r = 0,
        public g = 0,
        public b = 0
    ) {}

    toHex() {
        const rgb = [
            this.r, this.g, this.b
        ].map(
            x => Math.max(Math.min(255 * x, 255), 0).toString(16).padStart(2, "0")
        )

        return `#${rgb.join("")}`
    }

    static fromHex(hex: string) {
        const rgb = [
            hex.substring(1, 2),
            hex.substring(3, 2),
            hex.substring(5, 2),
        ].map(str => parseInt(str, 16) / 255)

        return new Color(
            rgb[0], rgb[1], rgb[2]
        )
    }
}

export class ColorType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "color"

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
            data.r, data.g, data.b
        )
    }

    serialize(): any {
        return {
            r: this._value.r,
            g: this._value.g,
            b: this._value.b
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
        })
        
        div.appendChild(input)

        this.domElement = div
        this.updateDOM()
    }
}
