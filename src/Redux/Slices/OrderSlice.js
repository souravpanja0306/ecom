import { createSlice } from '@reduxjs/toolkit';
import { fetchAllOrder } from '../Thunks/OrderThunk';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // Fetch Cart From API...
        builder.addCase(fetchAllOrder.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchAllOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchAllOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        // // Delete Cart From API...
        // builder.addCase(deleteCart.pending, (state, action) => {
        //     state.loading = true;
        //     state.error = null;
        // });
        // builder.addCase(deleteCart.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.data = action.payload;
        // });
        // builder.addCase(deleteCart.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // });
    },
});

export default orderSlice.reducer