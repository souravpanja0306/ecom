import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const fetchAllOrder = createAsyncThunk(
    'order/fetchAllOrder',
    async ({ order_type }, { rejectWithValue }) => {
        try {
            let query = [];
            if (order_type) query.push(`order_type=${order_type}`);

            const response = await axios({
                method: 'get',
                url: `${process.env.REACT_APP_BASE_URL}aprl_user/all_order_of_user?${query.join("&")}`,
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
