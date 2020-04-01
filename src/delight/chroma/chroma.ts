import { ChromaDevice } from "./device"

let heartbeatInterval: NodeJS.Timeout = null
let sessionURL = ""

export enum ChromaDeviceType {
    keyboard = "keyboard",
    mouse = "mouse",
    headset = "headset",
    mousepad = "mousepad",
    keypad = "keypad",
    chromaLink = "chromalink"
}

export async function init(
    devices: ChromaDeviceType[] = [ChromaDeviceType.keyboard]
): Promise<boolean> {
    const res = await fetch(
        "http://localhost:54235/razer/chromasdk",
        {
            method: "POST",
            body: JSON.stringify(
                {
                    title: "Delight",
                    description: "A node-based effect creation tool for Razer Chroma.",
                    author: {
                        name: "sci",
                        contact: "scintilla4evr.github.io"
                    },
                    device_supported: devices,
                    category: "application"
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const data = await res.json()

    if ("sessionid" in data && "uri" in data) {
        sessionURL = data.uri

        heartbeatInterval = setInterval(() => {
            fetch(
                `${sessionURL}/heartbeat`,
                {
                    method: "PUT"
                }
            )
        }, 1000)

        return true
    }

    return false
}

export async function uninit(): Promise<void> {
    if (!sessionURL.length) return

    if (heartbeatInterval) {
        clearInterval(heartbeatInterval)
        heartbeatInterval = null
    }

    await fetch(
        sessionURL, {
            method: "DELETE"
        }
    )
}

export async function putEffect(
    device: ChromaDeviceType,
    effectType: string,
    effectParam: any
) {
    if (!sessionURL.length) return

    const res = await fetch(
        `${sessionURL}/${device}`,
        {
            method: "PUT",
            body: JSON.stringify(
                {
                    effect: effectType,
                    param: effectParam
                }
            )
        }
    )

    // console.log(await res.json())
}