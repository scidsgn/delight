import { Font } from "../font"
import { FontGlyph } from "../glyph"

export default new Font(
    "Chromatica",
    [
        new FontGlyph(
            " ",
            null, null,
            [0, 0, 0, 0, 0]
        ),
        new FontGlyph(
            "a",
            [0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            null,
            [1, 0, 0, 1, 0],
            null,
            null,
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 1]
        )
    ],
    false
)