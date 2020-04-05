import { Context } from "../context"
import { writeFileSync, readFileSync } from "fs"

const { dialog } = require("electron").remote

export function saveContext(ctx: Context, fileName: string) {
    writeFileSync(
        fileName, JSON.stringify(
            ctx.serialize()
        ), "utf-8"
    )

    ctx.fileName = fileName
    ctx.modified = false
}

export function saveContextAs(ctx: Context) {
    dialog.showSaveDialog(
        {

        }
    ).then(
        data => {
            if (data.canceled) return

            saveContext(ctx, data.filePath)
        }
    )
}

export function openContext(ctx: Context) {
    dialog.showOpenDialog(
        {

        }
    ).then(
        data => {
            if (data.canceled) return

            const json = JSON.parse(
                readFileSync(
                    data.filePaths[0], "utf-8"
                )
            )
            ctx.deserialize(
                data.filePaths[0], json
            )
        }
    )
}

export function aboutDelight() {
    dialog.showMessageBox(
        {
            type: "info",
            title: "About Delight",
            message: `Delight - a node-based customization tool for Razer Chroma.`
        }
    )
}