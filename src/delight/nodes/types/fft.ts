import { IDelightType } from "./type"

import "../../styles/types/fft.scss"

export class FFTType implements IDelightType {
    public domElement: HTMLDivElement
    public typeId = "fft"
    public accepts = [this.typeId]

    public value: Float32Array

    constructor(
        public length: number
    ) {
        this.value = new Float32Array(length)
        this.createDOM()
    }

    deserialize(data: any) {
        this.value = null
    }

    serialize(): any {
        return null
    }

    createDOM() {
        const div = document.createElement("div")
        div.classList.add("type", this.typeId)

        this.domElement = div
    }
}
