import keys from "./templates/keys"

export enum ChromaEntityGroup {
    unknown = 0x0000,

    key = 0x1000,

    alnumKey = 0x1010,
    numberKey = 0x1011,
    letterKey = 0x1012,

    symbolKey = 0x1020,
    bracketKey = 0x1021,

    numpadKey = 0x1040,
    numpadDigitKey = 0x1041,
    numpadActionKey = 0x1042,

    modifierKey = 0x1080,
    modifierKeyLeft = 0x1081,
    modifierKeyRight = 0x1082,

    functionKey = 0x1100,
    lockKey = 0x1200,
    navigationKey = 0x1400,
    arrowKey = 0x1401,
    editingKey = 0x1800
}

export type ChromaEntityTemplate = {
    group: ChromaEntityGroup
    id: string
    name: string
}

export class ChromaEntity {
    public template: ChromaEntityTemplate

    constructor(
        public id: string,
        public arrayX: number,
        public arrayY: number,
        public positionX: number,
        public positionY: number
    ) {
        this.template = entityTemplates.find(
            e => e.id === id
        )
    }

    belongs(group: ChromaEntityGroup) {
        return (this.template.group & group) === group
    }
}

export const entityTemplates: ChromaEntityTemplate[] = [
    ...keys
]