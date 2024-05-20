import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },

    reducers: { 
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
    },
})

export const { addToCart, deleteItem} = cartSlice.actions;

export default cartSlice.reducer