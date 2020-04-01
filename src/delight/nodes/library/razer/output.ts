import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"
import { ColorType, Color } from "../../types/color"
import { ChromaDevice } from "../../../chroma/device"
import { ChromaRegion } from "../../../chroma/region"
import { Context } from "../../../context"

export class RazerOutputNode extends DelightNode {
    public static id = "razer.output"
    public static listName = "Chroma Output"

    public name = "Chroma Output"
    public category: NodeCategory = NodeCategory.razer

    public device: ChromaDevice
    public region: ChromaRegion

    constructor(
        public context: Context
    ) {
        super(context)

        this.device = context.environment.devices[0]
        this.region = this.device.regions[0]

        this.updateDOM()
    }

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "device", "Target device",
            SocketType.option,
            new SelectType(
                [], "0",
                v => this.changeDevice(+v)
            ),
            true
        ),
        new Socket(
            this,
            "region", "Lighting region",
            SocketType.option,
            new SelectType(
                [], "0",
                v => this.changeRegion(+v)
            ),
            true
        )
    ]

    changeDevice(index: number) {
        this.device = this.context.environment.devices[index]
        this.region = this.device.regions[0]
        this.updateDOM()
    }

    changeRegion(index: number) {
        this.region = this.device.regions[index]
        this.updateDOM()
    }

    updateDOM() {
        const deviceSelect = this.getOption("device") as SelectType

        deviceSelect.options = this.context.environment.devices.map(
            (dev, i) => {
                return {
                    id: i.toString(),
                    name: dev.name
                }
            }
        )
        deviceSelect.value = this.context.environment.devices.indexOf(this.device).toString()
        deviceSelect.updateDOM()
        
        const regionSelect = this.getOption("region") as SelectType

        regionSelect.options = this.device.regions.map(
            (reg, i) => {
                return {
                    id: i.toString(),
                    name: reg.name
                }
            }
        )
        regionSelect.value = this.device.regions.indexOf(this.region).toString()
        regionSelect.updateDOM()
    }

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "color", "Color",
            SocketType.input,
            new ColorType(
                new Color(0, 1, 0)
            ),
            true
        )
    ]
}