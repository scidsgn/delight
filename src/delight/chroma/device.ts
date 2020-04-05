import { ChromaDeviceType } from "./chroma"
import { ChromaEntity } from "./entities"
import { ChromaRegion, ChromaRect } from "./region"

export const razerVendorId = 0x1532

export class ChromaDevice {
    public regions: ChromaRegion[]

    public dimensions: ChromaRect = null

    constructor(
        public type: ChromaDeviceType,
        
        public name: string,
        public guid: string,
        public deviceId: number,

        public entities: ChromaEntity[]
    ) {
        this.regions = [
            new ChromaRegion(
                this, "Entire device",
                this.entities
            )
        ]
    }

    setEntityDimensions(
        apiX: number, apiY: number,
        x: number, y: number,
        width: number, height: number
    ) {
        const entity = this.entities.find(
            ent => ent.arrayX === apiX &&
                   ent.arrayY === apiY
        )

        if (!entity) return
        
        entity.physicalDimensions = {
            left: x, top: y,
            width, height,
            right: x + width,
            bottom: y + height
        }
    }

    updateDeviceDimensions() {
        const entities = this.entities.filter(
            ent => ent.physicalDimensions
        )

        let out: Partial<ChromaRect> = {
            left: Math.min(
                ...entities.map(ent => ent.physicalDimensions.left)
            ),
            top: Math.min(
                ...entities.map(ent => ent.physicalDimensions.top)
            ),
            right: Math.max(
                ...entities.map(ent => ent.physicalDimensions.right)
            ),
            bottom: Math.max(
                ...entities.map(ent => ent.physicalDimensions.bottom)
            )
        }

        this.dimensions = {
            left: out.left,
            top: out.top,
            right: out.right,
            bottom: out.bottom,
            width: out.right - out.left,
            height: out.bottom - out.top
        }
    }
}