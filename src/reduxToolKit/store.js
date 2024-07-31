import { configureStore } from "@reduxjs/toolkit";
import ProductsReducers from "./slices/products-slice";
import CartReducer from "./slices/cart-slice";

export const store = configureStore({
    reducer: {
        products: ProductsReducers,
        cart: CartReducer,
    },
    devTools: true
});