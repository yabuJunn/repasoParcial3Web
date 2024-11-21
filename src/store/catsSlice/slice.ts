import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATS_SLICE_NAME, DEAFULT_STATE_CATS } from "./constants";
import { CatApiResponseType, CatElementType } from "../../types/catApiTypes";

export const catsSlice = createSlice({
    name: CATS_SLICE_NAME,
    initialState: {
        ...DEAFULT_STATE_CATS
    },
    reducers: {
        updateCatsData: (store, action: PayloadAction<CatApiResponseType>) => {
            store.catsData = action.payload
        },
        changeDetailCat: (store, action: PayloadAction<CatElementType>) => {
            store.catDetailToShow = action.payload
        }
    }
})

export const { updateCatsData, changeDetailCat } = catsSlice.actions