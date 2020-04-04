import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"
import { ChromaRegion } from "../../../chroma/region"
import { ChromaEntity } from "../../../chroma/entities"

export class RazerInputNode extends DelightNode {
    public static id = "razer.input"
    public static listName = "Chroma Input"

    public name = "Chroma Input"
    public category: NodeCategory = NodeCategory.razer

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "positioning",
            "Positioning",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "virtual",
                        name: "Virtual (API)"
                    },
                    {
                        id: "physical",
                        name: "Physical"
                    }
                ],
                "virtual"
            )
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "x", "X position",
            SocketType.output,
            new NumberType(),
            false
        ),
        new Socket(
            this,
            "y", "Y position",
            SocketType.output,
            new NumberType(),
            false
        )
    ]

    update(region: ChromaRegion, entity: ChromaEntity) {
        const positioning = this.getOption("positioning") as SelectType
        const outX = this.getOutput("x") as NumberType 
        const outY = this.getOutput("y") as NumberType

        let pos = entity.getVirtualPosition(region)

        if (positioning.value === "physical")
            pos = entity.getPhysicalPosition(region)

        outX.value = pos.x
        outY.value = pos.y
    }
}