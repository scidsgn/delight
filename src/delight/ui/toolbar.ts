import { ChromaExecutor } from "../chroma/executor"
import { Context } from "../context"

export function prepareExecutorUI(executor: ChromaExecutor, ctx: Context) {
    document.querySelector("header button.play").addEventListener(
        "click", () => {
            document.body.classList.toggle("playing", !executor.running)
            
            if (executor.running) {
                executor.stopExecution()
            } else {
                executor.startExecution(ctx)
            }
        }
    )
}