import { ChromaDeviceType } from "./chroma"
import { ChromaEntity } from "./entities"
import { ChromaRegion } from "./region"

export const razerVendorId = 0x1532

export class ChromaDevice {
    public regions: ChromaRegion[]

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
}