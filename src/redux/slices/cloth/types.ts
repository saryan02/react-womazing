export type Cloth = {
    id: number,
    name: string,
    price: number,
    previously_price: number,
    size_item: string[],
    color: string[],
    image: string
    totalcount: number
}
export type FetchClothsArgs = {
    request:string
}

export interface ClothSliceState {
    items: Cloth[]
}

