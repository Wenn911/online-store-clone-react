export interface IItem {
    id: number | null
    name: string
    price: string
    img: string
    backImg: string
    typeId: number | null
    description: string | null
    createdAt: string
    updatedAt: string
}

export interface IBasket {
    id: number | null
    basketId: number | null
    itemId: number | null
    item: IItem | undefined
}
