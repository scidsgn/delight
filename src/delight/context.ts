import { DelightNode, UniformNode } from "./nodes/node"
import { NodeConnection, PartialNodeConnection } from "./nodes/connection"
import { Socket, SocketType } from "./nodes/socket"
import { IDelightType } from "./nodes/types/type"
import { MenuItem } from "electron"
import { availableNodes, flatAvailableNodes } from "./registeredNodes"
import { ChromaEnvironment } from "./chroma/environment"

const { Menu } = require("electron").remote

export class Context {
    public nodes: DelightNode[] = []
    private connections: NodeConnection[] = []

    private _currentNode: DelightNode = null
    private partialConnection: PartialNodeConnection = null

    private movingNode: DelightNode = null

    public nodeContainer: HTMLDivElement = document.querySelector("div.nodeGrid")

    public uniforms = {
        frame: 0,
        time: 0
    }

    private _audioCaptureStream: MediaStream
    public acsSourceNode: MediaStreamAudioSourceNode
    public acsAnalyzerNode: AnalyserNode

    private _fileName: string = null
    public _modified = false

    constructor(
        public environment: ChromaEnvironment,
        public audioContext: AudioContext
    ) {}

    serialize() {
        return {
            nodes: this.nodes.map(
                n => {
                    return {
                        id: n.__proto__.constructor.id,
                        data: n.serialize()
                    }
                }
            ),
            currentNode: this.nodes.indexOf(this._currentNode),

            connections: this.connections.map(
                c => c.serialize()
            )
        }
    }

    deserialize(fileName: string, data: any) {
        this.currentNode = null;
        
        [...this.nodes].forEach(n => this.deleteNode(n))

        data.nodes.forEach((nodeSpec: {
            id: string, data: any
        }) => {
            const nodeConstruct = flatAvailableNodes.find(nc => nc.id === nodeSpec.id)
            if (!nodeConstruct) return


            const node = new nodeConstruct(this)
            node.createDOM()
            
            node.deserialize(nodeSpec.data)

            this.addNode(node)
            this.nodeContainer.appendChild(
                node.domElement
            )
        })
        if (data.currentNode >= 0)
            this.currentNode = this.nodes[
                data.currentNode
            ]
        
        data.connections.forEach(
            (conn: any) => {
                this.connectNodes(
                    this.nodes[conn.input.node],
                    this.nodes[conn.input.node].outputs[conn.input.socket],
                    this.nodes[conn.output.node],
                    this.nodes[conn.output.node].inputs[conn.output.socket]
                )
            }
        )

        this.fileName = fileName
        this.modified = false

        this.updateConnectionsCanvas()
    }

    public get fileName() {
        return this._fileName
    }

    public set fileName(value: string) {
        const btn = document.querySelector(
            "body > header div.context > button"
        ) as HTMLButtonElement
        btn.textContent = value ?? "Untitled"

        this._fileName = value
    }

    get modified() {
        return this._modified
    }

    set modified(v: boolean) {
        document.body.classList.toggle("modified", v)
        this._modified = v
    }
    
    get audioCaptureStream() {
        return this._audioCaptureStream
    }

    set audioCaptureStream(stream: MediaStream) {
        this._audioCaptureStream = stream

        this.acsSourceNode = this.audioContext.createMediaStreamSource(
            this._audioCaptureStream
        )
        this.acsAnalyzerNode = this.audioContext.createAnalyser()
        this.acsAnalyzerNode.fftSize = 256

        this.acsSourceNode.connect(this.acsAnalyzerNode)
    }

    get currentNode() {
        return this._currentNode
    }

    set currentNode(n: DelightNode) {
        if (this._currentNode)
            this._currentNode.domElement.classList.remove("current")
        
        this._currentNode = n
        if (this._currentNode)
            n.domElement.classList.add("current")
    }

    addNode(n: DelightNode) {
        this.nodes.push(n)
        this.modified = true
    }

    deleteNode(n: DelightNode) {
        this.connections.filter(
            c => c.inputNode === n || c.outputNode === n
        ).forEach(conn => {
            conn.outputSocket.connected = false
            this.connections.splice(
                this.connections.indexOf(conn), 1
            )
        })
        this.nodeContainer.removeChild(
            n.domElement
        )
        this.nodes.splice(
            this.nodes.indexOf(n), 1
        )

        this.updateConnectionsCanvas(true)
        this.modified = true
    }

    findConnection(
        inputNode: DelightNode,
        inputSocket: Socket<IDelightType>,
        outputNode: DelightNode,
        outputSocket: Socket<IDelightType>
    ) {
        return this.connections.find(
            c => {
                let out = true

                if (inputNode) out = out && c.inputNode === inputNode
                if (inputSocket) out = out && c.inputSocket === inputSocket
                if (outputNode) out = out && c.outputNode === outputNode
                if (outputSocket) out = out && c.outputSocket === outputSocket

                return out
            }
        )
    }

    connectNodes(
        inputNode: DelightNode,
        inputSocket: Socket<IDelightType>,
        outputNode: DelightNode,
        outputSocket: Socket<IDelightType>
    ) {
        this.connections.push(
            new NodeConnection(
                inputNode, inputSocket,
                outputNode, outputSocket
            )
        )

        inputSocket.connected = true
        outputSocket.connected = true
        this.modified = true
    }

    disconnectNodes(conn: NodeConnection) {
        this.connections.splice(
            this.connections.indexOf(conn), 1
        )

        const otherInputConn = this.findConnection(
            conn.inputNode, conn.inputSocket,
            null, null
        )
        
        conn.inputSocket.connected = otherInputConn === null
        conn.outputSocket.connected = false
        this.modified = true
    }

    async getConnectionValue(
        targetNode: DelightNode,
        targetSocket: Socket<IDelightType>
    ): Promise<IDelightType> {
        const conn = this.findConnection(
            null, null, targetNode, targetSocket
        )
        if (conn) {
            if (!conn.inputNode.processed) {
                conn.inputNode.processed = true
                await conn.inputNode.process()
            }
            
            return conn.inputSocket.value
        }

        return null // Not connected to any output sockets
    }

    resetProcessing() {
        this.nodes.forEach(node => node.processed = false)
    }

    async processUniform() {
        await Promise.all(
            this.nodes.filter(
                n => n instanceof UniformNode
            ).map(
                n => (n as UniformNode).processOnce()
            )
        )
    }

    updateConnectionsCanvas(quick = false) {
        const canvas = document.querySelector("canvas.connections") as HTMLCanvasElement

        if (!quick) {
            canvas.width = innerWidth
            canvas.height = innerHeight
        }

        const ctx = canvas.getContext("2d")

        ctx.clearRect(0, 0, innerWidth, innerHeight)

        ctx.beginPath()

        this.connections.forEach(conn => {
            const sock1Pos = conn.inputSocket.position
            const sock2Pos = conn.outputSocket.position

            ctx.moveTo(
                sock1Pos[0], sock1Pos[1]
            )
            ctx.bezierCurveTo(
                sock1Pos[0] + 100, sock1Pos[1],
                sock2Pos[0] - 100, sock2Pos[1],
                sock2Pos[0], sock2Pos[1]
            )
        })

        ctx.lineWidth = 2
        ctx.strokeStyle = "#aaa"
        ctx.stroke()

        if (this.partialConnection) {
            const inputSockPos = this.partialConnection.inputSocket.position
            
            ctx.beginPath()

            ctx.moveTo(
                inputSockPos[0], inputSockPos[1]
            )
            ctx.quadraticCurveTo(
                (this.partialConnection.tailX + inputSockPos[0]) / 2,
                Math.max(
                    this.partialConnection.tailY, inputSockPos[1]
                ) + 64,
                this.partialConnection.tailX, this.partialConnection.tailY
            )

            ctx.strokeStyle = "#fff"
            ctx.stroke()
        }
    }

    setupEvents() {
        this.nodeContainer.addEventListener(
            "mousedown", (e) => this.handleMouseDown(e)
        )
        this.nodeContainer.addEventListener(
            "mouseup", (e) => this.handleMouseUp(e)
        )
        this.nodeContainer.addEventListener(
            "mousemove", (e) => this.handleMouseMove(e)
        )
        this.nodeContainer.addEventListener(
            "contextmenu", (e) => this.handleContextMenu(e)
        )
    }

    findSocket(
        predicate: (
            s: Socket<IDelightType>,
            i: number,
            a: Socket<IDelightType>[]
        ) => boolean
    ): Socket<IDelightType> {
        for (let node of this.nodes) {
            for (let socketList of [node.options, node.inputs, node.outputs]) {
                const socket = socketList.find(predicate)
                if (socket) return socket
            }
        }

        return null
    }

    handleMouseDown(e: MouseEvent) {
        const target = e.target as HTMLElement

        if (target.classList.contains("plug")) {
            const socket = this.findSocket(
                s => s.domElement === target.parentElement
            )

            if (socket.type === SocketType.output) {
                const newConn = new PartialNodeConnection(
                    socket.node, socket, null, null
                )
                newConn.tailX = e.clientX
                newConn.tailY = e.clientY

                this.partialConnection = newConn
            } else if (socket.type === SocketType.input) {
                const existingConn = this.findConnection(
                    null, null, socket.node, socket
                )

                if (existingConn) {
                    const newConn = new PartialNodeConnection(
                        existingConn.inputNode, existingConn.inputSocket,
                        null, null
                    )
                    newConn.tailX = e.clientX
                    newConn.tailY = e.clientY

                    this.disconnectNodes(existingConn)
                    this.partialConnection = newConn
                }
            }
        } else if (target.classList.contains("nodeHeader")) {
            const node = this.nodes.find(
                n => n.domElement === target.parentElement
            )

            this.movingNode = node            
            this.currentNode = node
        }
    }

    handleMouseUp(e: MouseEvent) {
        const target = e.target as HTMLElement

        if (target.classList.contains("plug")) {
            const socket = this.findSocket(
                s => s.domElement === target.parentElement
            )

            if (
                this.partialConnection &&
                socket.type === SocketType.input &&
                (
                    socket.value.accepts.includes(this.partialConnection.inputSocket.value.typeId) ||
                    socket.acceptAll
                )
            ) {
                const existingConn = this.findConnection(
                    null, null,
                    socket.node, socket
                )

                if (!existingConn) {
                    this.connectNodes(
                        this.partialConnection.inputNode,
                        this.partialConnection.inputSocket,
                        socket.node, socket
                    )
                }
            }

            this.partialConnection = null
        } else if (this.partialConnection) {
            this.partialConnection = null
        }

        this.movingNode = null

        this.updateConnectionsCanvas()
    }

    handleMouseMove(e: MouseEvent) {
        let updateConnCanvas = false

        if (e.buttons & 4) {
            this.nodes.forEach(
                n => n.move(e.movementX, e.movementY)
            )
            updateConnCanvas = true
        } else {
            if (this.partialConnection) {
                this.partialConnection.tailX = e.clientX
                this.partialConnection.tailY = e.clientY
    
                updateConnCanvas = true
            } else if (this.movingNode) {
                this.movingNode.move(
                    e.movementX, e.movementY
                )
                
                updateConnCanvas = true
            }
        }


        if (updateConnCanvas) this.updateConnectionsCanvas(true)
    }

    handleContextMenu(e: MouseEvent) {
        const addNodeItems: MenuItem[] = Object.keys(
            availableNodes
        ).map(
            category => {
                const nodeItems: MenuItem[] = availableNodes[category].map(
                    n => {
                        if (!n) {
                            return {
                                type: "separator"
                            } as unknown as MenuItem
                        }

                        return {
                            label: n.listName,
                            click: () => {
                                const node = new n(this)
                                node.createDOM()
                                node.setPosition(e.clientX, e.clientY)

                                this.addNode(node)
                                this.currentNode = node
                                this.movingNode = node
                                this.nodeContainer.appendChild(node.domElement)
                            }
                        } as unknown as MenuItem
                    }
                )

                return {
                    label: category,
                    submenu: nodeItems
                } as unknown as MenuItem
            }
        )

        const menu = Menu.buildFromTemplate(
            [
                ...addNodeItems
            ]
        )

        menu.popup()
    }
}