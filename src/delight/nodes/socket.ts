import { IDelightType } from "./types/type";

export class Socket<T> {
    constructor(
        public id: string,
        public name: string,
        public value: T,
        public adjustable = true
    ) {}
}