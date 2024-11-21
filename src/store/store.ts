import { configureStore } from "@reduxjs/toolkit";
import { catsSlice } from "./catsSlice/slice";

export const store = configureStore({
    reducer: {
        cats: catsSlice.reducer
    }
})

// Define y exporta RootState para usar el tipo en otros archivos
export type RootState = ReturnType<typeof store.getState>;



export type AppDispatch = typeof store.dispatch;