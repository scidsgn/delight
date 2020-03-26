import { IDelightType } from "./types/type"
import { DelightNode } from "./node"

export enum SocketType {
    input, output, option
}

export class Socket<T extends IDelightType> {
    public domElement: HTMLDivElement

    private _connected = false

    constructor(
        public node: DelightNode,
        public id: string,
        public name: string,
        public type: SocketType,
        public value: T,
        public adjustable = true,
        public header = true,
        public acceptAll = false
    ) {
        this.createDOM()
    }

    get connected() {
        return this._connected
    }

    set connected(c: boolean) {
        this._connected = c
        this.domElement.classList.toggle(
            "adjustable",
            this.adjustable
        )
        this.domElement.classList.toggle(
            "connected",
            this._connected
        )
    }

    get position(): number[] {
        let rect: DOMRect
        if (this.node.domElement.classList.contains("collapsed")) {
            rect = this.node.domElement.getBoundingClientRect()
        } else {
            rect = this.domElement.children[0].getBoundingClientRect()
        }

        return [
            rect.x + rect.width / 2,
            rect.y + rect.height / 2
        ]
    }

    createDOM() {
        const socket = document.createElement("div")
        socket.classList.add("socket")
        socket.classList.add(this.value.typeId)
        socket.classList.toggle("hiddenHeader", !this.header)

        if (this.type === SocketType.input)
            socket.classList.add("input")
        else if (this.type === SocketType.output)
            socket.classList.add("output")
        else if (this.type === SocketType.option)
            socket.classList.add("option")

        socket.classList.toggle("adjustable", this.adjustable)
        socket.classList.toggle("connected", this._connected)

        const plug = document.createElement("div")
        plug.classList.add("plug")
        socket.appendChild(plug)

        const name = document.createElement("p")
        name.textContent = this.name
        socket.appendChild(name)

        socket.appendChild(
            this.value.domElement
        )

        this.domElement = socket
    }
}