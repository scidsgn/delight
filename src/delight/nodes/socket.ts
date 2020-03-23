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
        public adjustable = true
    ) {
        this.createDOM()
    }

    get connected() {
        return this._connected
    }

    set connected(c: boolean) {
        this._connected = c
        this.domElement.classList.toggle(
            "editable",
            this.adjustable && !this._connected
        )
        this.domElement.classList.toggle(
            "connected",
            this._connected
        )
    }

    createDOM() {
        const socket = document.createElement("div")
        socket.classList.add("socket")
        socket.classList.add(this.value.typeId)

        if (this.type === SocketType.input)
            socket.classList.add("input")
        else if (this.type === SocketType.output)
            socket.classList.add("output")

        socket.classList.toggle("editable", this.adjustable && !this._connected)
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