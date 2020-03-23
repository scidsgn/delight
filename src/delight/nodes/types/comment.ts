import { IDelightType } from "./type"

import "../../styles/types/comment.scss"

export class CommentType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "comment"
    public accepts = [this.typeId]

    constructor(
        private _value = "",
        public editable = false
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
        const content = this.domElement.querySelector("div.content")

        content.textContent = this._value
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const content = document.createElement("div")
        content.classList.add("content")
        
        if (this.editable) content.contentEditable = "plaintext-only"

        content.addEventListener("input", () => {
            this.value = content.textContent
        })

        div.appendChild(content)

        this.domElement = div
        this.updateDOM()
    }
}
