import { DelightNode } from "./node";
import { Socket } from "./socket";
import { IDelightType } from "./types/type";

export class NodeConnection {
    constructor(
        public inputNode: DelightNode,
        public inputSocket: Socket<IDelightType>,
        public outputNode: DelightNode,
        public outputSocket: Socket<IDelightType>
    ) {}
}

export class PartialNodeConnection extends NodeConnection {
    public tailX = 0
    public tailY = 0
}