import { Context } from "./context"
import { RazerOutputNode } from "./nodes/library/razer/output"
import { RazerInputNode } from "./nodes/library/razer/input"

import { ChromaExecutor } from "./chroma/executor"
import { entityTemplates } from "./chroma/entities"
import { ChromaEnvironment } from "./chroma/environment"

import "./styles/layout.scss"
import "./styles/ui/toolbar.scss"

const audioContext = new AudioContext({
    sampleRate: 44100
})

const chromaEnviron = new ChromaEnvironment()

const ctx = new Context(
    chromaEnviron,
    audioContext
)
ctx.setupEvents()

const n1 = new RazerInputNode(ctx)
ctx.addNode(n1)

n1.createDOM()
n1.setPosition(16, 80)
ctx.nodeContainer.appendChild(n1.domElement)

const n2 = new RazerOutputNode(ctx)
ctx.addNode(n2)

n2.createDOM()
n2.setPosition(400, 80)
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

const executor = new ChromaExecutor(
    chromaEnviron, 30
)

executor.startExecution(ctx)

glob.executor = executor

console.log(
    entityTemplates
)