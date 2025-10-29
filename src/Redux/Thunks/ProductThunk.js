import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const fetchDashboard = createAsyncThunk(
    'product/fetchDashboard',
    async ({ order_type, accessories_category }, { rejectWithValue }) => {
        try {
            let query = ``;
            if (order_type) query += `collection=${order_type}`;
            if (accessories_category) query += `&accessories_category=${accessories_category}`;
            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/dashboard?${query}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                }
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_product/get_all_product?skip=0&limit=12`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                }
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);

export const fetchSingalProducts = createAsyncThunk(
    'product/fetchSingalProducts',
    async ({ material_no }, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/get_product?order_type=tradeshow&material_no=${material_no}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                }
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);

export const fetchProductFilter = createAsyncThunk(
    'product/fetchProductFilter',
    async ({ order_type }, { rejectWithValue }) => {
        try {
            let query = [];
            if (order_type) query.push(`order_type=${order_type}`);

            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_tradeshow/get_product?order_type=tradeshow&material_no=${order_type}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                }
            });
            return response.data.body;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);