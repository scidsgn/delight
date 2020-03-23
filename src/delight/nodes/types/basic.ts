import { IDelightType } from "./type"

import "../../styles/types/number.scss"

export class NumberType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "number"

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

        const input = this.domElement.children[0] as HTMLInputElement
        input.value = v.toString()
    }

    deserialize(data: any) {
        this.value = +data
    }

    serialize(): any {
        return this.value
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
            this._value = +input.value
        })
        
        div.appendChild(input)

        this.domElement = div
    }
}
