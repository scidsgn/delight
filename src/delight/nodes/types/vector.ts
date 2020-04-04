import { IDelightType } from "./type"

export class Vector {
    constructor(
        public x = 0,
        public y = 0
    ) {}
}

export class VectorType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "vector"
    public accepts = [this.typeId]

    public value: Vector

    constructor(
        public vec = new Vector()
    ) {
        this.createDOM()
    }

    deserialize(data: any) {
        this.value = new Vector(
            data.x, data.y
        )
    }

    serialize(): any {
        return {
            x: this.value.x,
            y: this.value.y
        }
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        this.domElement = div
    }
}
