import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axiosInstance';

export const fetchCompanies = createAsyncThunk('companies/fetchCompanies', async () => {
    const response = await axiosInstance.get('/companies/');
    return response.data;
});

const companySlice = createSlice({
    name: 'companies',
    initialState: { entities: [], loading: 'idle' },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompanies.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchCompanies.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.entities = action.payload;
            });
    },
});

export default companySlice.reducer;
