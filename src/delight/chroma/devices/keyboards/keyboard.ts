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
                "Function keys",
                this.entities.filter(
                    ent => ent.id.startsWith("keyF") && !isNaN(+ent.id.substring(4)) && ent.id.length > 4
                )
            ),
            new ChromaRegion(
                this,
                "Numpad",
                this.entities.filter(
                    ent => ent.id.startsWith("keyNumpad") || ent.id === "keyNumLock"
                )
            ),
            new ChromaRegion(
                this,
                "WASD",
                this.entities.filter(
                    ent => ent.id.length === 4 && "WASD".includes(ent.id[3])
                )
            ),
            new ChromaRegion(
                this,
                "Arrow keys",
                this.entities.filter(
                    ent => ent.id.startsWith("keyArrow")
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