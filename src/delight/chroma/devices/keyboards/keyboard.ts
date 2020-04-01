import { ChromaDevice } from "../../device"
import { ChromaDeviceType } from "../../chroma"
import { ChromaEntity } from "../../entities"
import { ChromaRegion } from "../../region"

export class ChromaKeyboardDevice extends ChromaDevice {
    public regions: ChromaRegion[]
    
    constructor(
        public name: string,
        public guid: string,
        public deviceId: number,

        public entities: ChromaEntity[]
    ) {
        super(
            ChromaDeviceType.keyboard,
            name, guid, deviceId,
            entities
        )

        this.regions = [
            new ChromaRegion(
                this, "Entire keyboard",
                this.entities
            ),
            new ChromaRegion(
                this,
                "Numpad",
                this.entities.filter(
                    ent => ent.id.startsWith("keyNumpad") || ent.id === "keyNumLock"
                )
            ),
            ...this.entities.map(
                ent => new ChromaRegion(
                    this, `Key - ${ent.template.name}`,
                    [ent]
                )
            )
        ]
    }
}