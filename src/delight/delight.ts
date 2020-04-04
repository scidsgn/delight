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