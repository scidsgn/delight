import { DelightNode, NodeCategory } from "../../node"
import { Socket, SocketType } from "../../socket"
import { IDelightType } from "../../types/type"
import { SelectType } from "../../types/select"
import { NumberType } from "../../types/number"

export class CompareNode extends DelightNode {
    public static id = "number.compare"
    public static listName = "Compare"

    public name = "Compare"
    public category: NodeCategory = NodeCategory.number
    
    public options: Socket<IDelightType>[] = [
        new Socket(
            this,
            "operation",
            "Operation",
            SocketType.option,
            new SelectType(
                [
                    {
                        id: "lt",
                        name: "Less than"
                    },
                    {
                        id: "leq",
                        name: "Less than or equal"
                    },
                    {
                        id: "gt",
                        name: "Greater than"
                    },
                    {
                        id: "geq",
                        name: "Greater than or equal"
                    },
                    {
                        id: "eq",
                        name: "Equal"
                    },
                    {
                        id: "neq",
                        name: "Not equal"
                    }
                ],
                "lt"
            ),
            true,
            false
        )
    ]
    public inputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "num1",
            "A",
            SocketType.input,
            new NumberType(0, 0.01)
        ),
        new Socket(
            this,
            "num2",
            "B",
            SocketType.input,
            new NumberType(0, 0.01)
        )
    ]
    public outputs: Socket<IDelightType>[] = [
        new Socket(
            this,
            "result",
            "Result",
            SocketType.output,
            new NumberType(0, 0.01),
            false // Not adjustable by the user
        )
    ]
    
    async process(): Promise<void> {
        const operation = this.getOption("operation") as SelectType

        const num1 = await this.getInput("num1") as NumberType
        const num2 = await this.getInput("num2") as NumberType

        const out = this.getOutput("result") as NumberType

        let bool = false

        if (operation.value === "lt")
            bool = num1.value < num2.value
        else if (operation.value === "leq")
            bool = num1.value <= num2.value
        else if (operation.value === "gt")
            bool = num1.value > num2.value
        else if (operation.value === "geq")
            bool = num1.value >= num2.value
        else if (operation.value === "eq")
            bool = num1.value === num2.value
        else if (operation.value === "neq")
            bool = num1.value !== num2.value
        
        out.value = bool ? 1 : 0
    }
}