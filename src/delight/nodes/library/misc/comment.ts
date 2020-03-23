import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { CommentType } from "../../types/comment"

export class CommentNode extends DelightNode {
    public id = "gen.testNode"

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