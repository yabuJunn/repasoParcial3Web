import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATS_SLICE_NAME, DEAFULT_STATE_CATS } from "./constants";
import { CatApiResponseType } from "../../types/catApiTypes";

export const catsSlice = createSlice({
    name: CATS_SLICE_NAME,
    initialState: {
        ...DEAFULT_STATE_CATS
    },
    reducers: {
        updateCatsData: (store, action: PayloadAction<CatApiResponseType>) => {
            store.catsData = action.payload
        }
    }
})

export const { updateCatsData } = catsSlice.actions