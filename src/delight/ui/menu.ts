import { MenuItem } from "electron"

const { Menu } = require("electron").remote

type TitlebarMenu = {
    name: string,
    menu: Partial<MenuItem>[]
}

const appMenus: TitlebarMenu[] = []
const titlebarMenuContainer = document.querySelector("body > header div.menu")

export function addAppMenu(...menus: TitlebarMenu[]) {
    menus.forEach(menu => {
        const button = document.createElement("button")
        button.textContent = menu.name

        button.addEventListener("click", () => {
            const rect = button.getBoundingClientRect()
            console.log(rect)

            Menu.buildFromTemplate(
                menu.menu as MenuItem[]
            ).popup(
                {
                    x: Math.floor(rect.x) + 1,
                    y: Math.floor(rect.bottom)
                }
            )
        })
    
        titlebarMenuContainer.appendChild(button)
    
        appMenus.push(menu)
    })
}