export interface IDelightType {
    domElement: HTMLElement
    typeId: string

    serialize: () => any
    deserialize: (data: any) => void
}
