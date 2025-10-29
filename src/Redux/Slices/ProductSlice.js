import { createSlice } from '@reduxjs/toolkit'
import { fetchDashboard, fetchProducts, fetchSingalProducts } from '../Thunks/ProductThunk'

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        //Fetch Dashboard From API...
        builder.addCase(fetchDashboard.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchDashboard.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchDashboard.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //Fetch Products From API...
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //Fetch Singal Products From API...
        builder.addCase(fetchSingalProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchSingalProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchSingalProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default productSlice.reducer