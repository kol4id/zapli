import { configureStore } from "@reduxjs/toolkit";
import products from './productsSlice'
import user from './userSlice'
import search from './searchSlice'
import cart from './cartSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            products: products,
            user: user,
            search: search,
            cart: cart
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];