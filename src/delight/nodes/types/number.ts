import { IDelightType } from "./type"

import "../../styles/types/number.scss"

export class NumberType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "number"
    public accepts = ["boundedNumber", "number"]

    constructor(
        private _value = 0,
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
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const input = document.createElement("input")
        input.type = "number"

        input.step = this.step.toString()
        input.value = this._value.toString()

        const listener = () => {
            this.value = +input.value

            dispatchEvent(
                new CustomEvent("contextModified")
            )
        }

        input.addEventListener("change", listener)
        input.addEventListener("keyup", (e) => {
            if (e.code == "Enter") listener()
        })
        
        div.appendChild(input)

        this.domElement = div
        this.updateDOM()
    }
}
