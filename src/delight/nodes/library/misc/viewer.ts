import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { CommentType } from "../../types/comment"

export class ViewerNode extends DelightNode {
    public id = "misc.viewer"

    public name = "Viewer"
    public category: NodeCategory = NodeCategory.comment
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this, "display", "",
            SocketType.option,
            new CommentType(
                "",
                false
            ),
            true, false
        )
    ]
}