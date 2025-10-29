import { createSlice } from '@reduxjs/toolkit';
import { fetchCart, deleteCart } from '../Thunks/CartThunk';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // Fetch Cart From API...
        builder.addCase(fetchCart.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // Delete Cart From API...
        builder.addCase(deleteCart.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deleteCart.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(deleteCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default cartSlice.reducer