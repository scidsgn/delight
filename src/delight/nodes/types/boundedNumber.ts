import { IDelightType } from "./type"

import "../../styles/types/number.scss"

export class BoundedNumberType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "boundedNumber"
    public accepts = ["boundedNumber", "number"]

    constructor(
        private _value = 0,
        public min = 0,
        public max = 1,
        public step = 0.01
    ) {
        this.createDOM()
    }

    get value() {
        return this._value
    }

    set value(v: number) {
        this._value = v

        this.updateDOM()
    }

    deserialize(data: any) {
        this.value = +data
    }

    serialize(): any {
        return this.value
    }

    updateDOM() {
        const input = this.domElement.children[0] as HTMLInputElement
        input.value = this._value.toString()

        const progress = this.domElement.querySelector("div.progress") as HTMLDivElement
        progress.style.width = `${100 * (this._value - this.min) / (this.max - this.min)}%`

        const span = this.domElement.querySelector("span") as HTMLSpanElement
        span.textContent = this._value.toString()
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const input = document.createElement("input")
        input.type = "range"

        input.min = this.min.toString()
        input.max = this.max.toString()
        input.step = this.step.toString()
        input.value = this._value.toString()

        input.addEventListener("input", () => {
            this.value = +input.value
        })
        
        div.appendChild(input)

        const display = document.createElement("div")
        display.classList.add("display")

        const progress = document.createElement("div")
        progress.classList.add("progress")
        display.appendChild(progress)

        const span = document.createElement("span")
        display.appendChild(span)

        div.appendChild(display)

        this.domElement = div
        this.updateDOM()
    }
}
