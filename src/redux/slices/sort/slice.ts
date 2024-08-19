import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SortSliceState} from "./types";


const initialState: SortSliceState = {
    categoryId: 0,
    pageNumber:1,

}

const sortSlice = createSlice({

    name: 'sort',
    initialState,
    reducers: {
        setCategoryId(state, action:PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setPageNumber(state, action:PayloadAction<number>){
            state.pageNumber = action.payload
        }
    }
})

export const {setCategoryId, setPageNumber} = sortSlice.actions
export default sortSlice.reducer