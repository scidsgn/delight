import { ChromaEntityTemplate, ChromaEntityGroup } from "../entities"

let keyEntityTemplates: ChromaEntityTemplate[] = [
    {
        group: 0x1400,
        id: "keyEsc",
        name: "Escape"
    },
    {
        group: 0x1400,
        id: "keyPageDown",
        name: "Page Down"
    },
    {
        group: 0x1400,
        id: "keyPageUp",
        name: "Page Up"
    },
    {
        group: 0x1400,
        id: "keyHome",
        name: "Home"
    },
    {
        group: 0x1400,
        id: "keyEnd",
        name: "End"
    },

    {
        group: 0x1401,
        id: "keyArrowUp",
        name: "Up Arrow"
    },
    {
        group: 0x1401,
        id: "keyArrowDown",
        name: "Down Arrow"
    },
    {
        group: 0x1401,
        id: "keyArrowLeft",
        name: "Left Arrow"
    },
    {
        group: 0x1401,
        id: "keyArrowRight",
        name: "Right Arrow"
    },

    {
        group: 0x1800,
        id: "keyEnter",
        name: "Enter"
    },
    {
        group: 0x1800,
        id: "keyBackspace",
        name: "Backspace"
    },
    {
        group: 0x1800,
        id: "keyInsert",
        name: "Insert"
    },
    {
        group: 0x1800,
        id: "keyDelete",
        name: "keyDelete"
    },
    {
        group: 0x1800,
        id: "keyTab",
        name: "Tab"
    },
    {
        group: 0x1800,
        id: "keySpace",
        name: "Space"
    },

    {
        group: 0x1200,
        id: "keyCapsLock",
        name: "Caps Lock"
    },
    {
        group: 0x1200,
        id: "keyNumLock",
        name: "Num Lock"
    },
    {
        group: 0x1200,
        id: "keyScrollLock",
        name: "Scroll Lock"
    },
    
    {
        group: 0x1081,
        id: "keyCtrlLeft",
        name: "Control (Left)"
    },
    {
        group: 0x1081,
        id: "keyWinLeft",
        name: "Windows (Left)"
    },
    {
        group: 0x1081,
        id: "keyAltLeft",
        name: "Alt (Left)"
    },
    {
        group: 0x1081,
        id: "keyShiftLeft",
        name: "Shift (Left)"
    },

    {
        group: 0x1082,
        id: "keyCtrlRight",
        name: "Control (Right)"
    },
    {
        group: 0x1082,
        id: "keyAltRight",
        name: "Alt (Right)"
    },
    {
        group: 0x1081,
        id: "keyShiftRight",
        name: "Shift (Right)"
    },
    {
        group: 0x1082,
        id: "keyFn",
        name: "Fn"
    },
    {
        group: 0x1082,
        id: "keyMenu",
        name: "Menu"
    },

    {
        group: 0x1020,
        id: "keyGrave",
        name: "` (Grave)"
    },
    {
        group: 0x1020,
        id: "keyHyphen",
        name: "- (Hyphen)"
    },
    {
        group: 0x1020,
        id: "keyEquals",
        name: "= (Equals sign)"
    },
    {
        group: 0x1021,
        id: "keyBracketLeft",
        name: "[ (Bracket open)"
    },
    {
        group: 0x1021,
        id: "keyBracketRight",
        name: "] (Bracket close)"
    },
    {
        group: 0x1020,
        id: "keySemicolon",
        name: "; (Semicolon)"
    },
    {
        group: 0x1020,
        id: "keyQuote",
        name: "' (Quote)"
    },
    {
        group: 0x1020,
        id: "keyComma",
        name: ", (Comma)"
    },
    {
        group: 0x1020,
        id: "keyPeriod",
        name: ". (Period)"
    },
    {
        group: 0x1020,
        id: "keySlash",
        name: "/ (Slash)"
    },
    {
        group: 0x1020,
        id: "keyBackslash",
        name: "\ (Backslash)"
    },

    {
        group: 0x1042,
        id: "keyNumpadSlash",
        name: "Numpad /"
    },
    {
        group: 0x1042,
        id: "keyNumpadAsterisk",
        name: "Numpad *"
    },
    {
        group: 0x1042,
        id: "keyNumpadMinus",
        name: "Numpad -"
    },
    {
        group: 0x1042,
        id: "keyNumpadPlus",
        name: "Numpad +"
    },
    {
        group: 0x1042,
        id: "keyNumpadEnter",
        name: "Numpad Enter"
    },
    {
        group: 0x1042,
        id: "keyNumpadPeriod",
        name: "Numpad ."
    },

    {
        group: 0x1000,
        id: "keyPrtSc",
        name: "Print Screen"
    },
    {
        group: 0x1000,
        id: "keyPause",
        name: "Pause Break"
    }
]

// Add the Fn keys
Array(12).fill(0).forEach(
    (_, i) => keyEntityTemplates.push(
        {
            group: 0x1100,
            id: `keyF${i + 1}`,
            name: `F${i + 1}`
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
                name: letter
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
            name: `Number ${i}`
        },
        {
            group: 0x1041,
            id: `keyNumpad${i}`,
            name: `Numpad ${i}`
        }
    )
)

export default keyEntityTemplates