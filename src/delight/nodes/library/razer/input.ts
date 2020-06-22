import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"
import { ChromaRegion } from "../../../chroma/region"
import { ChromaEntity } from "../../../chroma/entities"
import { VectorType, Vector } from "../../types/vector"

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
        ),
        new Socket(
            this,
            "pos", "Position vector",
            SocketType.output,
            new VectorType(),
            false
        ),
        new Socket(
            this,
            "intpos", "Integer position",
            SocketType.output,
            new VectorType(),
            false
        ),
        new Socket(
            this,
            "ratio", "Aspect ratio",
            SocketType.output,
            new NumberType(),
            false
        ),
    ]

    update(region: ChromaRegion, entity: ChromaEntity) {
        const positioning = this.getOption("positioning") as SelectType
        const outX = this.getOutput("x") as NumberType
        const outY = this.getOutput("y") as NumberType
        const outVec = this.getOutput("pos") as VectorType
        const outIntVec = this.getOutput("intpos") as VectorType
        const outRatio = this.getOutput("ratio") as NumberType

        let bounds = region.apiBounds
        let pos = entity.getVirtualPosition(region)
        const vbounds = bounds

        if (positioning.value === "physical")
            bounds = region.physicalBounds
            pos = entity.getPhysicalPosition(region)

        outX.value = pos.x
        outY.value = pos.y
        outVec.value.x = pos.x
        outVec.value.y = pos.y
        outIntVec.value.x = entity.arrayX - vbounds.left
        outIntVec.value.y = entity.arrayY - vbounds.top

        const ratio = bounds.width / bounds.height
        outRatio.value = isNaN(ratio) ? 1 : ratio
    }
}