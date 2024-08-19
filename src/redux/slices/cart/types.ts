export type  CartItem = {
    id: number;
    size:string;
    color: string;
    title: string;
    image: string;
    price:number;
    quantity:number;
}

export type CartSliceState = {
    totalPrice:number
    items:CartItem[]
}

export type  QuantityType = {
    id:number;
    quantity: number;
}