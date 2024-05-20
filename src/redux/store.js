import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
        productsSlice,
        cartSlice
    }
})