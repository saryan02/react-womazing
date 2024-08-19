import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {HeaderSliceState} from "./types";


const initialState:HeaderSliceState  = {
    pageLink:'/',

}


const headerSlice = createSlice({
        name: 'header',
        initialState,
        reducers: {
            setPageId(state, action:PayloadAction<string>){
                state.pageLink = action.payload
            }
        },

    }
)

export const {setPageId} = headerSlice.actions;

export default headerSlice.reducer
