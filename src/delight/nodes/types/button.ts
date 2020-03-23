import { IDelightType } from "./type"

import "../../styles/types/button.scss"

export class ButtonType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "button"

    constructor(
        public text: string,
        private callback: (button: ButtonType) => void
    ) {
        this.createDOM()
    }

    deserialize(data: any) {}
    serialize(): any {}

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const btn = document.createElement("button")

        btn.textContent = this.text

        btn.addEventListener("click", () => {
            this.callback(this)
        })
        
        div.appendChild(btn)

        this.domElement = div
    }
}
