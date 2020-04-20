import { Context } from "./context"

import { ChromaExecutor } from "./chroma/executor"
import { ChromaEnvironment } from "./chroma/environment"

import { addAppMenu } from "./ui/menu"
import { saveContextAs, saveContext, openContext, aboutDelight } from "./ui/io"

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
    chromaEnviron, 60
)

executor.startExecution(ctx)

glob.executor = executor
glob.ctx = ctx

addEventListener("contextModified", () => {
    ctx.modified = true
})

// Setup menus
addAppMenu(
    {
        name: "File",
        menu: [
            {
                label: "New",
                click: () => {
                    ctx.deserialize(
                        null, {
                            nodes: [],
                            currentNode: -1,
                            connections: []
                        }
                    )
                }
            },
            {
                type: "separator"
            },
            {
                label: "Open",
                click: () => openContext(ctx)
            },
            {
                type: "separator"
            },
            {
                label: "Save",
                click: () => {
                    if (ctx.fileName)
                        saveContext(ctx, ctx.fileName)
                    else
                        saveContextAs(ctx)
                }
            },
            {
                label: "Save as...",
                click: () => saveContextAs(ctx)
            },
            {
                type: "separator"
            },
            {
                label: "About",
                click: () => aboutDelight()
            }
        ]
    },
    {
        name: "Nodes",
        menu: [
            {
                label: "Add node"
            },
            {
                label: "Reusable groups"
            },
            {
                type: "separator"
            },
            {
                label: "Enable grid",
                type: "checkbox",
                checked: true
            }
        ]
    }
)