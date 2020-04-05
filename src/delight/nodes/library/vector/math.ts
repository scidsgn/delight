import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { VectorType, Vector } from "../../types/vector"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"

export class VectorMathNode extends DelightNode {
    public static id = "vector.math"
    public static listName = "Vector Math"

    public name = "Vector Math"
    public category: NodeCategory = NodeCategory.vector

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "operation",
            "Operation",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "add",
                        name: "Add"
                    },
                    {
                        id: "sub",
                        name: "Subtract"
                    }
                ],
                "add"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "vec1", "Vector",
            SocketType.input,
            new VectorType(),
            false
        ),
        new Socket(
            this,
            "vec2", "Vector",
            SocketType.input,
            new VectorType(),
            false
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "vec", "Vector",
            SocketType.output,
            new VectorType(),
            false
        )
    ]

    async process() {
        const operation = this.getOption("operation") as SelectType

        const vs = await Promise.all(
            [
                this.getInput("vec1"),
                this.getInput("vec2")
            ]
        ) as [VectorType, VectorType]
        const vecOut = this.getOutput("vec") as VectorType

        if (operation.value === "add")
            vecOut.value = new Vector(
                vs[0].value.x + vs[1].value.x,
                vs[0].value.y + vs[1].value.y
            )
        else if (operation.value === "sub")
            vecOut.value = new Vector(
                vs[0].value.x - vs[1].value.x,
                vs[0].value.y - vs[1].value.y
            )
    }
}