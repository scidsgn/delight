import { DelightNodeConstructor } from "./nodes/node"
import { ColorValueNode } from "./nodes/library/color/color"
import { CombineRGBNode } from "./nodes/library/color/combineRGB"
import { NumberValueNode } from "./nodes/library/number/number"
import { RandomNumberNode } from "./nodes/library/number/random"
import { ArithmeticNode } from "./nodes/library/number/arithmetic"
import { RazerInputNode } from "./nodes/library/razer/input"
import { RazerOutputNode } from "./nodes/library/razer/output"
import { FrameNode } from "./nodes/library/time/frame"
import { TimeNode } from "./nodes/library/time/time"
import { CommentNode } from "./nodes/library/misc/comment"
import { ViewerNode } from "./nodes/library/misc/viewer"
import { ClampNode } from "./nodes/library/number/clamp"
import { MapRangeNode } from "./nodes/library/number/mapRange"
import { SeparateRGBNode } from "./nodes/library/color/separateRGB"
import { TrigNode } from "./nodes/library/number/trig"
import { LoopNode } from "./nodes/library/number/loop"
import { AudioSourceNode } from "./nodes/library/audio/source"
import { AudioPeakNode } from "./nodes/library/audio/peak"
import { AudioSampleNode } from "./nodes/library/audio/sample"
import { CompareNode } from "./nodes/library/number/compare"
import { InvertNode } from "./nodes/library/color/invert"
import { BlendNode } from "./nodes/library/color/blend"
import { RazerPreviewNode } from "./nodes/library/razer/preview"

export const availableNodes: {
    [prop: string]: DelightNodeConstructor[]
} = {
    "Number": [
        NumberValueNode,
        RandomNumberNode,
        null,
        ArithmeticNode,
        CompareNode,
        TrigNode,
        null,
        ClampNode,
        MapRangeNode,
        LoopNode
    ],
    "Color": [
        ColorValueNode,
        null,
        CombineRGBNode,
        SeparateRGBNode,
        null,
        BlendNode,
        InvertNode
    ],
    "Audio": [
        AudioSourceNode,
        null,
        AudioPeakNode,
        AudioSampleNode
    ],
    "Razer Chroma": [
        RazerInputNode,
        RazerOutputNode,
        null,
        RazerPreviewNode
    ],
    "Time": [
        FrameNode,
        TimeNode
    ],
    "Misc.": [
        CommentNode,
        ViewerNode
    ]
}

export const flatAvailableNodes = (
    Object.values(availableNodes).flat() as DelightNodeConstructor[]
).filter(nc => nc)