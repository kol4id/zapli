import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";

interface IUser{
    isLogined: boolean,
    AT: string,
    RT: string,
}

interface IUserState extends IUser{
    isLoading: boolean,
}

const initialState: IUserState = {
    isLoading: false,
    isLogined: false,
    AT: '',
    RT: '',
}

export const authUser = createAsyncThunk(
    'user/authUser',
    async (_, {rejectWithValue }) =>{
        try {
            const response = await axios.post('/api/login');
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(authUser.pending, (state) =>{
                state.isLoading = true;
            })
            .addCase(authUser.fulfilled, (state, action: PayloadAction<{AT: string, RT: string}>) =>{
                state.isLoading = false;
                state.AT = action.payload.AT;
                if (typeof window !== 'undefined' && action.payload.AT) {
                    localStorage.setItem('auth_token', action.payload.AT);
                }
                state.RT = action.payload.RT;
            })
            .addCase(authUser.rejected, (state, action) =>{
                state.isLoading = false;
                console.log(action.payload)
            })
    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;