import { createSlice } from '@reduxjs/toolkit';
import { fetchWishlist, deleteWishlist, addToWishlist } from '../Thunks/WishlistThunk';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Wishlist From API...
            .addCase(fetchWishlist.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Delete Wishlist From API...
            .addCase(deleteWishlist.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.data = state.data.filter(item => item.product_id !== action.payload);
            })
            .addCase(deleteWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add Wishlist From API...
            .addCase(addToWishlist.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export default wishlistSlice.reducer