import { IDelightType } from "./type"

import "../../styles/types/select.scss"

type SelectTypeOptionItem = {
    id: string
    name: string
}

type SelectTypeOptionGroup = {
    header: string
    items: SelectTypeOptionItem[]
}

type SelectTypeOption = SelectTypeOptionGroup | SelectTypeOptionItem

export class SelectType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "select"
    public accepts = [this.typeId]

    constructor(
        public options: SelectTypeOption[] = [],
        private _value = "",
        public valueChangeWatcher: (value: string) => void = null
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

        if (this.valueChangeWatcher)
            this.valueChangeWatcher(this.value)
    }

    serialize(): any {
        return this.value
    }

    selectOptionToDOM(opt: SelectTypeOption): HTMLElement {
        if ("header" in opt) {
            const group = document.createElement("optgroup")

            group.label = opt.header

            opt.items.forEach(
                item => group.appendChild(this.selectOptionToDOM(item))
            )

            return group
        } else {
            const option = document.createElement("option")

            option.textContent = opt.name
            option.value = opt.id

            return option
        }
    }

    updateDOM() {
        const select = this.domElement.querySelector("select") as HTMLSelectElement

        select.innerHTML = ""
        this.options.forEach(
            item => select.appendChild(this.selectOptionToDOM(item))
        )

        select.value = this._value
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        const select = document.createElement("select")

        select.addEventListener("input", () => {
            this.value = select.value

            if (this.valueChangeWatcher)
                this.valueChangeWatcher(this.value)

            dispatchEvent(
                new CustomEvent("contextModified")
            )
        })

        div.appendChild(select)

        this.domElement = div
        this.updateDOM()
    }
}
