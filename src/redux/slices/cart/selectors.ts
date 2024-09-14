import {RootState} from "../../store"

export const selectItems = (state: RootState) => state.cartSlice.items
export const selectTotal = (state: RootState) => state.cartSlice.totalPrice