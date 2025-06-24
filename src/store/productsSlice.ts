import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export interface IProduct{
    id: number,
    name: string,
    type: string,
    price: number,
    amount: number,
    reserved: number
}

interface ProductsState{
    isLoading: boolean,
    products: IProduct[]
}

const initialState: ProductsState = {
    isLoading: false,
    products: []
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (offset: number = 0, {rejectWithValue}) =>{
        try {
            const response = await axios.get('/api/products', {
                params:{
                    offset
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('auth_token')}`
            }});
            return response.data.response[0].result
            
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                if (action.payload.offset == 0){
                    state.products = action.payload.products;
                } else {
                    state.products.push(...action.payload.products)
                }
                state.isLoading = false;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            })
    }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;

