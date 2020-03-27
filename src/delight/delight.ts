import { Context } from "./context"
import { RazerOutputNode } from "./nodes/library/razer/output"
import { RazerInputNode } from "./nodes/library/razer/input"

import "./styles/layout.scss"
import { ChromaExecutor } from "./chroma/executor"

const audioContext = new AudioContext({
    sampleRate: 44100
})

const ctx = new Context(
    audioContext
)
ctx.setupEvents()

const n1 = new RazerInputNode(ctx)
ctx.addNode(n1)

n1.createDOM()
n1.setPosition(16, 16)
ctx.nodeContainer.appendChild(n1.domElement)

const n2 = new RazerOutputNode(ctx)
ctx.addNode(n2)

n2.createDOM()
n2.setPosition(400, 16)
ctx.nodeContainer.appendChild(n2.domElement)

ctx.updateConnectionsCanvas()

const glob = window as any

navigator.mediaDevices.getUserMedia(
    {
        audio: {
            mandatory: {
                chromeMediaSource: 'desktop'
            }
        },
        video: {
            mandatory: {
                chromeMediaSource: 'desktop'
            }
        }
    } as unknown
).then(stream => {
    ctx.audioCaptureStream = stream
    glob.analyzer = ctx.acsAnalyzerNode
})

const executor = new ChromaExecutor(30)

executor.startExecution(ctx)

glob.executor = executor