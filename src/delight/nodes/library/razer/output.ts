import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { NumberType } from "../../types/number"
import { SelectType } from "../../types/select"
import { ColorType } from "../../types/color"

export class RazerOutputNode extends DelightNode {
    public static id = "razer.output"
    public static listName = "Send to Chroma"

    public name = "Send to Chroma"
    public category: NodeCategory = NodeCategory.razer

    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "device", "Target device",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "keyboard",
                        name: "Keyboard"
                    }
                ], "keyboard"
            ),
            true, false
        )
    ]

    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "color", "Color",
            SocketType.input,
            new ColorType(),
            true
        )
    ]
}