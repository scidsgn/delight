import { IDelightType } from "./type"

import "../../styles/types/vector.scss"

export class Vector {
    constructor(
        public x = 0,
        public y = 0
    ) {}

    get length() {
        return Math.hypot(this.x, this.y)
    }

    get angle() {
        let angle = Math.atan2(this.y, this.x)

        if (angle < 0)
            angle += Math.PI * 2

        return angle
    }
}

export class VectorType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "vector"
    public accepts = [this.typeId]

    constructor(
        public value = new Vector()
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
