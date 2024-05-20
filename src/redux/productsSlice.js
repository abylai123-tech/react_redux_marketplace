import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        productsWithDiscount: [],
        categories: [],
        filteredProducts: [],
        status: 'idle',
        error: null,
    },
    reducers: { 
        setProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
            state.categories = [...new Set(state.products.map(product => product.category))];
            state.status = 'success';
        },
        setProductsWithDiscount: (state, action) => {
            const minDiscount = 2;
            const maxDiscount = 6;
            const addedProductIds = new Set(state.productsWithDiscount.map(product => product.id));

            while (state.productsWithDiscount.length < 5) {
                const randomProduct = state.products[Math.floor(Math.random() * state.products.length)];

                // Проверяем, не добавлен ли уже этот продукт
                if (!addedProductIds.has(randomProduct.id)) {
                    const randomDiscount = Math.floor(Math.random() * (maxDiscount - minDiscount + 1)) + minDiscount;
                    const productWithDiscount = { ...randomProduct, discount: randomDiscount };
                    state.productsWithDiscount.push(productWithDiscount);
                    addedProductIds.add(randomProduct.id);
                }
            }
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        filterProductsByCategory: (state, action) => {
            const category = action.payload;
            state.filteredProducts = [...state.products].filter(product => product.category === category);
            state.status = 'success';
        },
    },
})

export const { setProducts, setLoading, setError, filterProductsByCategory, setProductsWithDiscount } = productsSlice.actions;

export default productsSlice.reducer;