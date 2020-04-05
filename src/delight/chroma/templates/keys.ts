import { ChromaEntityTemplate, ChromaEntityGroup } from "../entities"

let keyEntityTemplates: ChromaEntityTemplate[] = [
    {
        group: 0x1400,
        id: "keyEsc",
        name: "Escape",
        display: `Es`
    },
    {
        group: 0x1400,
        id: "keyPageDown",
        name: "Page Down",
        display: `PD`
    },
    {
        group: 0x1400,
        id: "keyPageUp",
        name: "Page Up",
        display: `PU`
    },
    {
        group: 0x1400,
        id: "keyHome",
        name: "Home",
        display: `Hm`
    },
    {
        group: 0x1400,
        id: "keyEnd",
        name: "End",
        display: `En`
    },

    {
        group: 0x1401,
        id: "keyArrowUp",
        name: "Up Arrow",
        display: "↑"
    },
    {
        group: 0x1401,
        id: "keyArrowDown",
        name: "Down Arrow",
        display: "↓"
    },
    {
        group: 0x1401,
        id: "keyArrowLeft",
        name: "Left Arrow",
        display: "←"
    },
    {
        group: 0x1401,
        id: "keyArrowRight",
        name: "Right Arrow",
        display: "→"
    },

    {
        group: 0x1800,
        id: "keyEnter",
        name: "Enter",
        display: `Enter`
    },
    {
        group: 0x1800,
        id: "keyBackspace",
        name: "Backspace",
        display: `Back`
    },
    {
        group: 0x1800,
        id: "keyInsert",
        name: "Insert",
        display: `In`
    },
    {
        group: 0x1800,
        id: "keyDelete",
        name: "keyDelete",
        display: `Del`
    },
    {
        group: 0x1800,
        id: "keyTab",
        name: "Tab",
        display: `Tab`
    },
    {
        group: 0x1800,
        id: "keySpace",
        name: "Space",
        display: `Space`
    },

    {
        group: 0x1200,
        id: "keyCapsLock",
        name: "Caps Lock",
        display: `Caps`
    },
    {
        group: 0x1200,
        id: "keyNumLock",
        name: "Num Lock",
        display: `NL`
    },
    {
        group: 0x1200,
        id: "keyScrollLock",
        name: "Scroll Lock",
        display: `SL`
    },
    
    {
        group: 0x1081,
        id: "keyCtrlLeft",
        name: "Control (Left)",
        display: `Ctrl`
    },
    {
        group: 0x1081,
        id: "keyWinLeft",
        name: "Windows (Left)",
        display: `W`
    },
    {
        group: 0x1081,
        id: "keyAltLeft",
        name: "Alt (Left)",
        display: `Alt`
    },
    {
        group: 0x1081,
        id: "keyShiftLeft",
        name: "Shift (Left)",
        display: `Shift`
    },

    {
        group: 0x1082,
        id: "keyCtrlRight",
        name: "Control (Right)",
        display: `Ctrl`
    },
    {
        group: 0x1082,
        id: "keyAltRight",
        name: "Alt (Right)",
        display: `Alt`
    },
    {
        group: 0x1081,
        id: "keyShiftRight",
        name: "Shift (Right)",
        display: `Shift`
    },
    {
        group: 0x1082,
        id: "keyFn",
        name: "Fn",
        display: `Fn`
    },
    {
        group: 0x1082,
        id: "keyMenu",
        name: "Menu",
        display: `Mnu`
    },

    {
        group: 0x1020,
        id: "keyGrave",
        name: "` (Grave)",
        display: "`"
    },
    {
        group: 0x1020,
        id: "keyHyphen",
        name: "- (Hyphen)",
        display: `-`
    },
    {
        group: 0x1020,
        id: "keyEquals",
        name: "= (Equals sign)",
        display: `=`
    },
    {
        group: 0x1021,
        id: "keyBracketLeft",
        name: "[ (Bracket open)",
        display: `[`
    },
    {
        group: 0x1021,
        id: "keyBracketRight",
        name: "] (Bracket close)",
        display: `]`
    },
    {
        group: 0x1020,
        id: "keySemicolon",
        name: "; (Semicolon)",
        display: `;`
    },
    {
        group: 0x1020,
        id: "keyQuote",
        name: "' (Quote)",
        display: `'`
    },
    {
        group: 0x1020,
        id: "keyComma",
        name: ", (Comma)",
        display: `,`
    },
    {
        group: 0x1020,
        id: "keyPeriod",
        name: ". (Period)",
        display: `.`
    },
    {
        group: 0x1020,
        id: "keySlash",
        name: "/ (Slash)",
        display: `/`
    },
    {
        group: 0x1020,
        id: "keyBackslash",
        name: "\\ (Backslash)",
        display: `\\`
    },

    {
        group: 0x1042,
        id: "keyNumpadSlash",
        name: "Numpad /",
        display: `/`
    },
    {
        group: 0x1042,
        id: "keyNumpadAsterisk",
        name: "Numpad *",
        display: `*`
    },
    {
        group: 0x1042,
        id: "keyNumpadMinus",
        name: "Numpad -",
        display: `-`
    },
    {
        group: 0x1042,
        id: "keyNumpadPlus",
        name: "Numpad +",
        display: `+`
    },
    {
        group: 0x1042,
        id: "keyNumpadEnter",
        name: "Numpad Enter",
        display: `E`
    },
    {
        group: 0x1042,
        id: "keyNumpadPeriod",
        name: "Numpad .",
        display: `.`
    },

    {
        group: 0x1000,
        id: "keyPrtSc",
        name: "Print Screen",
        display: `PS`
    },
    {
        group: 0x1000,
        id: "keyPause",
        name: "Pause Break",
        display: `PB`
    }
]

// Add the Fn keys
Array(12).fill(0).forEach(
    (_, i) => keyEntityTemplates.push(
        {
            group: 0x1100,
            id: `keyF${i + 1}`,
            name: `F${i + 1}`,
            display: `F${i + 1}`
        }
    )
)

// Add the A-Z keys
Array(26).fill(0).forEach(
    (_, i) => {
        const letter = String.fromCharCode(0x41 + i)
        keyEntityTemplates.push(
            {
                group: 0x1012,
                id: `key${letter}`,
                name: letter,
                display: letter.toUpperCase()
            }
        )
    }
)

// Add the number keys
Array(10).fill(0).forEach(
    (_, i) => keyEntityTemplates.push(
        {
            group: 0x1011,
            id: `keyNum${i}`,
            name: `Number ${i}`,
            display: i.toString()
        },
        {
            group: 0x1041,
            id: `keyNumpad${i}`,
            name: `Numpad ${i}`,
            display: i.toString()
        }
    )
)

export default keyEntityTemplates