import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "./productsSlice";

interface ICartState{
    items: IProduct[]
}

const initialState: ICartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAddItem(state, action){
            state.items.push(action.payload)
            const string = JSON.stringify(state.items);
            localStorage.setItem('cart', string);
        },
        cartDeleteItem(state, action){
            state.items.splice(action.payload, 1);
            const string = JSON.stringify(state.items);
            localStorage.setItem('cart', string);
        },
        cartLoadItems(state){
            const raw = localStorage.getItem('cart');
            state.items = raw ? JSON.parse(raw) : [];
        }
    },
})

export const {cartAddItem, cartDeleteItem, cartLoadItems} = cartSlice.actions;
export default cartSlice.reducer;