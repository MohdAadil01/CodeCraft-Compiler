import {configureStore} from "@reduxjs/toolkit"
import complerSlice from "./slices/compilerSlice"

export const store = configureStore({
    reducer: {
        complerSlice
    }
})

export type RootState = ReturnType<typeof store.getState>