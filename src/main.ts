import { app, BrowserWindow } from "electron"

app.commandLine.appendSwitch(
    "autoplay-policy",
    "no-user-gesture-required"
)

app.on("ready", () => {
    const win = new BrowserWindow(
        {
            width: 1280,
            height: 720,

            webPreferences: {
                nodeIntegration: true
            }
        }
    )

    win.loadFile("delight/index.html")
})