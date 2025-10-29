import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Redux/Slices/ProductSlice';
import wishlistReducer from './Redux/Slices/WishlistSlice';
import cartReducer from './Redux/Slices/CartSlice';
import orderReducer from './Redux/Slices/OrderSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
        order: orderReducer,
    },
})