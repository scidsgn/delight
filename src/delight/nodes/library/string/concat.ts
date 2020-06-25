import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { StringType } from "../../types/string"

export class StringConcatNode extends DelightNode {
    public static id = "string.concat"
    public static listName = "Concatenate (Join)"

    public name = "Concatenate"
    public category: NodeCategory = NodeCategory.string

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "str1", "String",
            SocketType.input,
            new StringType()
        ),
        new Socket(
            this,
            "str2", "String",
            SocketType.input,
            new StringType()
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "string", "String",
            SocketType.output,
            new StringType(),
            false
        )
    ]
    
    async process(): Promise<void> {
        const str1 = await this.getInput("str1") as StringType
        const str2 = await this.getInput("str2") as StringType

        const out = this.getOutput("string") as StringType
        
        out.value = str1.value + str2.value
    }
}