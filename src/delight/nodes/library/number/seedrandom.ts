import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import Prando from "prando"

export class SeedRandomNumberNode extends DelightNode {
    public static id = "number.seedrandom"
    public static listName = "Random from Seed"

    public name = "Random from Seed"
    public category: NodeCategory = NodeCategory.number

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "seed",
            "Seed",
            SocketType.input,
            new NumberType(0, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "number", "Number",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    private lastSeed = 0
    private update = true

    async process() {
        const seed = await this.getInput("seed") as NumberType
        const out = this.getOutput("number") as NumberType

        if (seed.value !== this.lastSeed) {
            this.lastSeed = seed.value
            this.update = true
        }

        if (this.update) {
            const prng = new Prando(this.lastSeed * 1000)

            out.value = prng.next(0, 1)
            this.update = false
        }
    }
}