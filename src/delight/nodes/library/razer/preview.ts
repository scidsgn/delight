import { DelightNode, NodeCategory } from "../../node"
import { IDelightType } from "../../types/type"
import { Socket } from "../../socket"
import { ChromaDevice } from "../../../chroma/device"

import "../../../styles/ui/devicePreview.scss"
import { ChromaEntity } from "../../../chroma/entities"
import { Color } from "../../types/color"

export class RazerPreviewNode extends DelightNode {
    public static id = "razer.preview"
    public static listName = "Chroma Preview"

    public name = "Chroma Preview"
    public category: NodeCategory = NodeCategory.razer

    public device = this.context.environment.devices[0]

    public devicePreviewDOM: HTMLDivElement
    public deviceLightsDOM: HTMLDivElement
    public deviceObjectsDOM: HTMLDivElement

    public options: Socket<IDelightType>[] = [
    ]

    updateDevice() {
        this.deviceLightsDOM.innerHTML = ""
        this.deviceObjectsDOM.innerHTML = ""

        this.device.entities.forEach(entity => {
            const light = document.createElement("div")

            light.style.left = `${entity.ledPositionX - this.device.dimensions.left}px`
            light.style.top = `${entity.ledPositionY - this.device.dimensions.top}px`

            this.deviceLightsDOM.appendChild(light)
            this.deviceObjectsDOM.appendChild(
                entity.getPreviewDOM(this.device)
            )
        })

        this.devicePreviewDOM.style.width = `${this.device.dimensions.width}px`
        this.devicePreviewDOM.style.height = `${this.device.dimensions.height}px`
    }

    resetPreview() {
        this.deviceLightsDOM.childNodes.forEach(ch => {
            if (ch instanceof HTMLDivElement) ch.style.setProperty("--entity-led", "#000")
        })
        this.deviceObjectsDOM.childNodes.forEach(ch => {
            if (ch instanceof HTMLDivElement) ch.style.setProperty("--entity-led", "#000")
        })
    }

    updateEntity(entity: ChromaEntity, color: Color) {
        const index = this.device.entities.indexOf(entity)
        const hex = color.toHex()

        const lightDiv = this.deviceLightsDOM.children[index] as HTMLDivElement
        const objDiv = this.deviceObjectsDOM.children[index] as HTMLDivElement

        lightDiv.style.setProperty("--entity-led", hex)
        objDiv.style.setProperty("--entity-led", hex)
    }

    createDOM() {
        super.createDOM()

        this.domElement.style.width = `unset`

        this.devicePreviewDOM = document.createElement("div")
        this.devicePreviewDOM.classList.add("devicePreview")

        this.deviceLightsDOM = document.createElement("div")
        this.deviceLightsDOM.classList.add("lights")
        this.devicePreviewDOM.appendChild(this.deviceLightsDOM)

        this.deviceObjectsDOM = document.createElement("div")
        this.deviceObjectsDOM.classList.add("objects")
        this.devicePreviewDOM.appendChild(this.deviceObjectsDOM)

        this.domElement.appendChild(this.devicePreviewDOM)

        this.updateDevice()
    }
}