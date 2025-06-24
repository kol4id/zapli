import { createSlice } from "@reduxjs/toolkit"

interface ISearchState{
    value: string
}

const initialState: ISearchState = {
    value: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchSetValue(state, action){
            state.value = action.payload;
        }        
    },
})

export const {searchSetValue} = searchSlice.actions;
export default searchSlice.reducer;