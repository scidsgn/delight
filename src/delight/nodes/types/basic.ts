import { IDelightType } from "./type";

export class NumberType implements IDelightType {
    constructor(
        public value = 0,
        public min = 0,
        public max = 1,
        public step = 0.01
    ) {}

    deserialize(data: any) {
        this.value = +data
    }

    serialize(): any {
        return this.value
    }
}
