import { ChromaDevice } from "./device"
import ornata from "./devices/keyboards/ornata"

export class ChromaEnvironment {
    public devices: ChromaDevice[] = [
        ornata
    ]
}