import { IDelightType } from "./type"

import "../../styles/types/string.scss"

export class StringType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "string"
    public accepts = [this.typeId]

    constructor(
        private _value = ""
    ) {
        this.createDOM()
    }

    get value() {
        return this._value
    }

    set value(v: string) {
        this._value = v

        this.updateDOM()
    }

    deserialize(data: any) {
        this.value = data
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

        input.value = this._value

        const listener = () => {
            this.value = input.value

            dispatchEvent(
                new CustomEvent("contextModified")
            )
        }

        input.placeholder = "Text..."

        input.addEventListener("change", listener)
        input.addEventListener("keyup", (e) => {
            if (e.code == "Enter") listener()
        })
        
        div.appendChild(input)

        this.domElement = div
        this.updateDOM()
    }
}
