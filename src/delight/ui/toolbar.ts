import { ChromaExecutor } from "../chroma/executor"

export function prepareExecutorUI(executor: ChromaExecutor) {
    const playBtn: HTMLButtonElement = document.querySelector(
        "button[data-command=play]"
    )

    playBtn.addEventListener("click", () => {

    })
}