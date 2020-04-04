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

    public options: Socket<IDelightType>[] = [
    ]

    updateDevice() {
        this.devicePreviewDOM.innerHTML = ""

        this.device.entities.forEach(entity => {
            this.devicePreviewDOM.appendChild(
                entity.getPreviewDOM()
            )
        })
    }

    updateEntity(entity: ChromaEntity, color: Color) {
        const index = this.device.entities.indexOf(entity)
        const hex = color.toHex()

        const entDiv = this.devicePreviewDOM.children[index] as HTMLDivElement

        entDiv.style.setProperty("--entity-led", hex)
    }

    createDOM() {
        super.createDOM()

        this.devicePreviewDOM = document.createElement("div")
        this.devicePreviewDOM.classList.add("devicePreview")

        this.domElement.appendChild(this.devicePreviewDOM)

        this.updateDevice()
    }
}