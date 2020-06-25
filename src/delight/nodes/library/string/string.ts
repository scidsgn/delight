import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { StringType } from "../../types/string"

export class StringValueNode extends DelightNode {
    public static id = "string.string"
    public static listName = "String"

    public name = "String"
    public category: NodeCategory = NodeCategory.general

    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "string", "String",
            SocketType.output,
            new StringType(),
            true, false
        )
    ]
}