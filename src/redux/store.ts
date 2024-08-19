import clothSlice from "./slices/cloth/slice"
import headerSlice from "./slices/header/slice"
import sortSlice from "./slices/sort/slice"
import cartSlice from "./slices/cart/slice"
import {useDispatch} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        clothSlice,
        headerSlice,
        sortSlice,
        cartSlice,
    }
})

export type RootState = ReturnType<typeof  store.getState>
//type AppDispatch = typeof store.dispatch

//export const useAppDispatch = () => useDispatch<AppDispatch>();