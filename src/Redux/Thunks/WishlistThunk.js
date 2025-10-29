import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchWishlist',
    async (_, { rejectWithValue }) => {
        try {
            let response = await axios({
                method: "get",
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/get_aprl_tradeshow_wishlist`,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: process.env.REACT_APP_TOKEN
                }
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        };
    },
);

export const deleteWishlist = createAsyncThunk(
    'wishlist/deleteWishlist',
    async ({ product_id }, { rejectWithValue }) => {
        try {
            await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/delete_aprl_tradeshow_wishlist`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                },
                data: { id: product_id },
            });
            return product_id;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        };
    },
);

export const addToWishlist = createAsyncThunk(
    'wishlist/addToWishlist',
    async ({ product_id, product_type }, { rejectWithValue }) => {
        try {
            let newData = {
                product_id: product_id,
                product_type: product_type
            };
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/insert_aprl_tradeshow_wishlist`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                },
                data: newData,
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);
