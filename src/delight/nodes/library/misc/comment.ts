import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { CommentType } from "../../types/comment"

export class CommentNode extends DelightNode {
    public static id = "misc.comment"
    public static listName = "Comment"

    public name = "Comment"
    public category: NodeCategory = NodeCategory.comment
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this, "comment", "Comment",
            SocketType.option,
            new CommentType(
                "Your comment here",
                true
            ),
            true, false
        )
    ]
}