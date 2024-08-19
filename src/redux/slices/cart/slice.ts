import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CartItem, CartSliceState, QuantityType} from "./types";
import {getCartFromLS} from "../../../utils/getCartFromLS";
import cartItem from "../../../components/cartItem";


const {items, totalPrice} = getCartFromLS()

const initialState: CartSliceState = {
    totalPrice,
    items
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addItem(state, action: PayloadAction<CartItem>) {
                const find = state.items.find((obj) => obj.id === action.payload.id)

                if (!find) {

                    state.items.push({
                        ...action.payload
                    })
                }
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.quantity) + sum
                }, 0)
            },

            removeItem(state, action: PayloadAction<number>) {
                state.items = state.items.filter(obj => obj.id !== action.payload)
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.quantity) + sum
                }, 0)
            },

            changeQuantity(state, action: PayloadAction<QuantityType>) {
                const find = state.items.find((obj) => obj.id === action.payload.id)

                if (find)
                    find.quantity = action.payload.quantity
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return (obj.price * obj.quantity) + sum
                }, 0)
            },
        }
    }
)

export const {addItem, removeItem, changeQuantity} = cartSlice.actions

export default cartSlice.reducer