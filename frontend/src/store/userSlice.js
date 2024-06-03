import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axiosInstance.get('/users/');
    return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: { entities: [], loading: 'idle' },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            });
    },
});

export default userSlice.reducer;
