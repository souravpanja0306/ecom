import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async ({ order_type }, { rejectWithValue }) => {
        try {
            let query = ``;
            if (order_type) query += `order_type=${order_type}`;

            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_product/get_cart?${query}`,
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

export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async ({ material_no, buyer_id }, { rejectWithValue }) => {
        try {
            let query = [];
            if (material_no) query.push(`material_no=${material_no}`);
            if (buyer_id) query.push(`buyer_id=${buyer_id}`);
            
            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_product/tradeshow_delete_cart?${query.join("&")}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: process.env.REACT_APP_TOKEN,
                }
            });
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    },
);