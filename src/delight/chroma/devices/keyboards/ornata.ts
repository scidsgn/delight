import { ChromaEntity } from "../../entities"
import { ChromaKeyboardDevice } from "./keyboard"

const ornata = new ChromaKeyboardDevice(
    "Razer Ornata Chroma",
    "803378C1-CC48-4970-8539-D828CC1D420A",
    0x021E,

    [
        new ChromaEntity("keyEsc", 1, 0, 67, 76),

        new ChromaEntity("keyF1", 3, 0, 145, 76),
        new ChromaEntity("keyF2", 4, 0, 183, 76),
        new ChromaEntity("keyF3", 5, 0, 221, 76),
        new ChromaEntity("keyF4", 6, 0, 259, 76),
        new ChromaEntity("keyF5", 7, 0, 317, 76),
        new ChromaEntity("keyF6", 8, 0, 355, 76),
        new ChromaEntity("keyF7", 9, 0, 393, 76),
        new ChromaEntity("keyF8", 10, 0, 431, 76),
        new ChromaEntity("keyF9", 11, 0, 490, 76),
        new ChromaEntity("keyF10", 12, 0, 528, 76),
        new ChromaEntity("keyF11", 13, 0, 566, 76),
        new ChromaEntity("keyF12", 14, 0, 604, 76),

        new ChromaEntity("keyGrave", 1, 1, 67, 127),
        new ChromaEntity("keyNum1", 2, 1, 105, 127),
        new ChromaEntity("keyNum2", 3, 1, 143, 127),
        new ChromaEntity("keyNum3", 4, 1, 181.5, 127),
        new ChromaEntity("keyNum4", 5, 1, 220.5, 127),
        new ChromaEntity("keyNum5", 6, 1, 259, 127),
        new ChromaEntity("keyNum6", 7, 1, 297, 127),
        new ChromaEntity("keyNum7", 8, 1, 335.5, 127),
        new ChromaEntity("keyNum8", 9, 1, 374, 127),
        new ChromaEntity("keyNum9", 10, 1, 412.5, 127),
        new ChromaEntity("keyNum0", 11, 1, 451, 127),
        new ChromaEntity("keyHyphen", 12, 1, 489.5, 127),
        new ChromaEntity("keyEquals", 13, 1, 528, 127),
        new ChromaEntity("keyBackspace", 14, 1, 585, 127),

        new ChromaEntity("keyTab", 1, 2, 77, 165),
        new ChromaEntity("keyQ", 2, 2, 125, 165),
        new ChromaEntity("keyW", 3, 2, 163, 165),
        new ChromaEntity("keyE", 4, 2, 201, 165),
        new ChromaEntity("keyR", 5, 2, 239.5, 165),
        new ChromaEntity("keyT", 6, 2, 278, 165),
        new ChromaEntity("keyY", 7, 2, 316.5, 165),
        new ChromaEntity("keyU", 8, 2, 355, 165),
        new ChromaEntity("keyI", 9, 2, 393.5, 165),
        new ChromaEntity("keyO", 10, 2, 432, 165),
        new ChromaEntity("keyP", 11, 2, 470, 165),
        new ChromaEntity("keyBracketLeft", 12, 2, 508, 165),
        new ChromaEntity("keyBracketRight", 13, 2, 546, 165),
        new ChromaEntity("keyBackslash", 14, 2, 594, 165),

        new ChromaEntity("keyCapsLock", 1, 3, 81.3335, 203),
        new ChromaEntity("keyA", 2, 3, 134.5, 203),
        new ChromaEntity("keyS", 3, 3, 173, 203),
        new ChromaEntity("keyD", 4, 3, 211, 203),
        new ChromaEntity("keyF", 5, 3, 249.5, 203),
        new ChromaEntity("keyG", 6, 3, 288.5, 203),
        new ChromaEntity("keyH", 7, 3, 327.5, 203),
        new ChromaEntity("keyJ", 8, 3, 366, 203),
        new ChromaEntity("keyK", 9, 3, 404, 203),
        new ChromaEntity("keyL", 10, 3, 442, 203),
        new ChromaEntity("keySemicolon", 11, 3, 480, 203),
        new ChromaEntity("keyQuote", 12, 3, 518, 203),
        new ChromaEntity("keyEnter", 14, 3, 580, 203),

        new ChromaEntity("keyShiftLeft", 1, 4, 91, 241),
        new ChromaEntity("keyZ", 3, 4, 153.5, 241),
        new ChromaEntity("keyX", 4, 4, 192, 241),
        new ChromaEntity("keyC", 5, 4, 230, 241),
        new ChromaEntity("keyV", 6, 4, 268.5, 241),
        new ChromaEntity("keyB", 7, 4, 307, 241),
        new ChromaEntity("keyN", 8, 4, 345, 241),
        new ChromaEntity("keyM", 9, 4, 383.5, 241),
        new ChromaEntity("keyComma", 10, 4, 422.5, 241),
        new ChromaEntity("keyPeriod", 11, 4, 461.5, 241),
        new ChromaEntity("keySlash", 12, 4, 500, 241),
        new ChromaEntity("keyShiftRight", 14, 4, 571, 241),
        
        new ChromaEntity("keyCtrlLeft", 1, 5, 77, 278.667),
        new ChromaEntity("keyWinLeft", 2, 5, 130, 279),
        new ChromaEntity("keyAltLeft", 3, 5, 178, 279),
        new ChromaEntity("keySpace", 7, 5, 312.5, 279),
        new ChromaEntity("keyAltRight", 11, 5, 447, 279),
        new ChromaEntity("keyFn", 12, 5, 495, 279),
        new ChromaEntity("keyMenu", 13, 5, 542.5, 279),
        new ChromaEntity("keyCtrlRight", 14, 5, 594.5, 279),

        new ChromaEntity("keyPrtSc", 15, 0, 656, 76),
        new ChromaEntity("keyScrollLock", 16, 0, 694, 76),
        new ChromaEntity("keyPause", 17, 0, 732, 76),

        new ChromaEntity("keyInsert", 15, 1, 656, 127),
        new ChromaEntity("keyHome", 16, 1, 694, 127),
        new ChromaEntity("keyPageUp", 17, 1, 732, 127),

        new ChromaEntity("keyDelete", 15, 2, 656, 165),
        new ChromaEntity("keyEnd", 16, 2, 694, 165),
        new ChromaEntity("keyPageDown", 17, 2, 732, 165),

        new ChromaEntity("keyArrowUp", 16, 4, 694, 241),
        new ChromaEntity("keyArrowLeft", 15, 5, 656, 279),
        new ChromaEntity("keyArrowDown", 16, 5, 694, 279),
        new ChromaEntity("keyArrowRight", 17, 5, 732, 279),

        new ChromaEntity("keyNumLock", 18, 1, 783, 127),
        new ChromaEntity("keyNumpadSlash", 19, 1, 821, 127),
        new ChromaEntity("keyNumpadAsterisk", 20, 1, 859, 127),
        new ChromaEntity("keyNumpadMinus", 21, 1, 897, 127),

        new ChromaEntity("keyNumpad7", 18, 2, 783, 165),
        new ChromaEntity("keyNumpad8", 19, 2, 821, 165),
        new ChromaEntity("keyNumpad9", 20, 2, 859, 165),
        new ChromaEntity("keyNumpadPlus", 21, 2, 897, 184),

        new ChromaEntity("keyNumpad4", 18, 3, 783, 203),
        new ChromaEntity("keyNumpad5", 19, 3, 821, 203),
        new ChromaEntity("keyNumpad6", 20, 3, 859, 203),

        new ChromaEntity("keyNumpad1", 18, 4, 783, 241),
        new ChromaEntity("keyNumpad2", 19, 4, 821, 241),
        new ChromaEntity("keyNumpad3", 20, 4, 859, 241),

        new ChromaEntity("keyNumpad0", 19, 5, 802, 279),
        new ChromaEntity("keyNumpadPeriod", 20, 5, 859, 279),
        new ChromaEntity("keyNumpadEnter", 21, 4, 897, 260)
    ]
)

ornata.setEntityDimensions(1, 0, 49, 58, 36, 36)
ornata.setEntityDimensions(3, 0, 127, 58, 36, 36)
ornata.setEntityDimensions(4, 0, 165, 58, 36, 36)
ornata.setEntityDimensions(5, 0, 203, 58, 36, 36)
ornata.setEntityDimensions(6, 0, 241, 58, 36, 36)
ornata.setEntityDimensions(7, 0, 299, 58, 36, 36)
ornata.setEntityDimensions(8, 0, 337, 58, 36, 36)
ornata.setEntityDimensions(9, 0, 375, 58, 36, 36)
ornata.setEntityDimensions(10, 0, 413, 58, 36, 36)
ornata.setEntityDimensions(11, 0, 472, 58, 36, 36)
ornata.setEntityDimensions(12, 0, 510, 58, 36, 36)
ornata.setEntityDimensions(13, 0, 548, 58, 36, 36)
ornata.setEntityDimensions(14, 0, 586, 58, 36, 36)
ornata.setEntityDimensions(15, 0, 638, 58, 36, 36)
ornata.setEntityDimensions(16, 0, 676, 58, 36, 36)
ornata.setEntityDimensions(17, 0, 714, 58, 36, 36)

ornata.setEntityDimensions(1, 1, 49, 109, 36, 36)
ornata.setEntityDimensions(2, 1, 87, 109, 36, 36)
ornata.setEntityDimensions(3, 1, 125, 109, 36, 36)
ornata.setEntityDimensions(4, 1, 163, 109, 37, 36)
ornata.setEntityDimensions(5, 1, 202, 109, 37, 36)
ornata.setEntityDimensions(6, 1, 241, 109, 36, 36)
ornata.setEntityDimensions(7, 1, 279, 109, 36, 36)
ornata.setEntityDimensions(8, 1, 317, 109, 37, 36)
ornata.setEntityDimensions(9, 1, 356, 109, 36, 36)
ornata.setEntityDimensions(10, 1, 394, 109, 37, 36)
ornata.setEntityDimensions(11, 1, 433, 109, 36, 36)
ornata.setEntityDimensions(12, 1, 471, 109, 37, 36)
ornata.setEntityDimensions(13, 1, 510, 109, 36, 36)
ornata.setEntityDimensions(14, 1, 548, 109, 74, 36)

ornata.setEntityDimensions(1, 2, 49, 147, 56, 36)
ornata.setEntityDimensions(2, 2, 107, 147, 36, 36)
ornata.setEntityDimensions(3, 2, 145, 147, 36, 36)
ornata.setEntityDimensions(4, 2, 183, 147, 36, 36)
ornata.setEntityDimensions(5, 2, 221, 147, 37, 36)
ornata.setEntityDimensions(6, 2, 260, 147, 36, 36)
ornata.setEntityDimensions(7, 2, 298, 147, 37, 36)
ornata.setEntityDimensions(8, 2, 337, 147, 36, 36)
ornata.setEntityDimensions(9, 2, 375, 147, 37, 36)
ornata.setEntityDimensions(10, 2, 414, 147, 36, 36)
ornata.setEntityDimensions(11, 2, 452, 147, 36, 36)
ornata.setEntityDimensions(12, 2, 490, 147, 36, 36)
ornata.setEntityDimensions(13, 2, 528, 147, 36, 36)
ornata.setEntityDimensions(14, 2, 566, 147, 56, 36)

ornata.setEntityDimensions(1, 3, 49, 185, 64.667, 36)
ornata.setEntityDimensions(2, 3, 116, 185, 37, 36)
ornata.setEntityDimensions(3, 3, 155, 185, 36, 36)
ornata.setEntityDimensions(4, 3, 193, 185, 36, 36)
ornata.setEntityDimensions(5, 3, 231, 185, 37, 36)
ornata.setEntityDimensions(6, 3, 270, 185, 37, 36)
ornata.setEntityDimensions(7, 3, 309, 185, 37, 36)
ornata.setEntityDimensions(8, 3, 348, 185, 36, 36)
ornata.setEntityDimensions(9, 3, 386, 185, 36, 36)
ornata.setEntityDimensions(10, 3, 424, 185, 36, 36)
ornata.setEntityDimensions(11, 3, 462, 185, 36, 36)
ornata.setEntityDimensions(12, 3, 500, 185, 36, 36)
ornata.setEntityDimensions(14, 3, 538, 185, 84, 36)

ornata.setEntityDimensions(1, 4, 49, 223, 84, 36)
ornata.setEntityDimensions(3, 4, 135, 223, 37, 36)
ornata.setEntityDimensions(4, 4, 174, 223, 36, 36)
ornata.setEntityDimensions(5, 4, 212, 223, 36, 36)
ornata.setEntityDimensions(6, 4, 250, 223, 37, 36)
ornata.setEntityDimensions(7, 4, 289, 223, 36, 36)
ornata.setEntityDimensions(8, 4, 327, 223, 36, 36)
ornata.setEntityDimensions(9, 4, 365, 223, 37, 36)
ornata.setEntityDimensions(10, 4, 404, 223, 37, 36)
ornata.setEntityDimensions(11, 4, 443, 223, 37, 36)
ornata.setEntityDimensions(12, 4, 482, 223, 36, 36)
ornata.setEntityDimensions(14, 4, 520, 223, 102, 36)

ornata.setEntityDimensions(1, 5, 49, 260.667, 56, 36)
ornata.setEntityDimensions(2, 5, 107, 261, 46, 36)
ornata.setEntityDimensions(3, 5, 155, 261, 46, 36)
ornata.setEntityDimensions(7, 5, 203, 261, 219, 36)
ornata.setEntityDimensions(11, 5, 424, 261, 46, 36)
ornata.setEntityDimensions(12, 5, 472, 261, 46, 36)
ornata.setEntityDimensions(13, 5, 520, 261, 45, 36)
ornata.setEntityDimensions(14, 5, 567, 261, 55, 36)

ornata.setEntityDimensions(15, 1, 638, 109, 36, 36)
ornata.setEntityDimensions(16, 1, 676, 109, 36, 36)
ornata.setEntityDimensions(17, 1, 714, 109, 36, 36)

ornata.setEntityDimensions(15, 2, 638, 147, 36, 36)
ornata.setEntityDimensions(16, 2, 676, 147, 36, 36)
ornata.setEntityDimensions(17, 2, 714, 147, 36, 36)

ornata.setEntityDimensions(16, 4, 676, 223, 36, 36)

ornata.setEntityDimensions(15, 5, 638, 261, 36, 36)
ornata.setEntityDimensions(16, 5, 676, 261, 36, 36)
ornata.setEntityDimensions(17, 5, 714, 261, 36, 36)

ornata.setEntityDimensions(18, 1, 765, 109, 36, 36)
ornata.setEntityDimensions(19, 1, 803, 109, 36, 36)
ornata.setEntityDimensions(20, 1, 841, 109, 36, 36)
ornata.setEntityDimensions(21, 1, 879, 109, 36, 36)

ornata.setEntityDimensions(18, 2, 765, 147, 36, 36)
ornata.setEntityDimensions(19, 2, 803, 147, 36, 36)
ornata.setEntityDimensions(20, 2, 841, 147, 36, 36)
ornata.setEntityDimensions(21, 2, 879, 147, 36, 74)

ornata.setEntityDimensions(18, 3, 765, 185, 36, 36)
ornata.setEntityDimensions(19, 3, 803, 185, 36, 36)
ornata.setEntityDimensions(20, 3, 841, 185, 36, 36)

ornata.setEntityDimensions(18, 4, 765, 223, 36, 36)
ornata.setEntityDimensions(19, 4, 803, 223, 36, 36)
ornata.setEntityDimensions(20, 4, 841, 223, 36, 36)

ornata.setEntityDimensions(21, 4, 879, 223, 36, 74)
ornata.setEntityDimensions(19, 5, 765, 261, 74, 36)
ornata.setEntityDimensions(20, 5, 841, 261, 36, 36)

ornata.updateDeviceDimensions()

export default ornata