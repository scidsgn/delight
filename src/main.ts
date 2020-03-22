import { app, BrowserWindow } from "electron"

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