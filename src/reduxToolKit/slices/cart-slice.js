import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if(findProduct) {
                findProduct.quantity += 1;
            }
            else {
                const productClone = {...action.payload, quantity: 1}
                state.push(productClone);
            }
        },
        deleteFromCart: (state, action) => {
            // return state.pop(action.payload);
            return state.filter((product) => product.id !== action.payload.id);
        },
        clearAllCart: (state, action) => {
            return [];
        },
    },
})

export const {addToCart, deleteFromCart, clearAllCart} = cartSlice.actions;
export default cartSlice.reducer;