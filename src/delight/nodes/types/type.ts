export interface IDelightType {
    serialize: () => any
    deserialize: (data: any) => void
}