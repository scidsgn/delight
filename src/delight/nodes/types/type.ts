export interface IDelightType {
    domElement: HTMLElement
    typeId: string
    accepts: string[]

    serialize: () => any
    deserialize: (data: any) => void
}

export class NullType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "null"
    public accepts = [this.typeId]

    constructor() {
        this.createDOM()
    }

    deserialize(data: any) {}

    serialize(): any {}

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        this.domElement = div
    }
}
