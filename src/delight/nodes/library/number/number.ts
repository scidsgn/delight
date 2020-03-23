import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"

export class NumberValueNode extends DelightNode {
    public static id = "number.number"
    public static listName = "Number"

    public name = "Number"
    public category: NodeCategory = NodeCategory.number

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "color", "Color",
            SocketType.output,
            new NumberType(),
            true, false
        )
    ]
}