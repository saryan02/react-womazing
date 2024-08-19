import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Cloth, ClothSliceState, FetchClothsArgs} from "./types";
import axios from "axios";

const initialState: ClothSliceState = {
    items: []

}

export const fetchClothes = createAsyncThunk(
    'cloth/fetchClothStatus',

    async (params:string, thunkAPI) => {


        const res = await axios.get<Cloth[]>(params);
        console.log(res)
        if (!res.data.length) {
            return thunkAPI.rejectWithValue('ничего нет');
        }
        return thunkAPI.fulfillWithValue(res.data);
    }
)
const clothSlice = createSlice({
        name: 'cloth',
        initialState,
        reducers: {


        },
        extraReducers: (builder) => {
                builder
                    .addCase(fetchClothes.fulfilled, (state, action) =>{
                        state.items = action.payload
                    })
                    .addCase(fetchClothes.rejected,(_state, action) =>{
                        console.log(action.payload)
                    })

        }
    }
)

export default clothSlice.reducer