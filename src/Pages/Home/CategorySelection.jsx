import React, { useEffect } from 'react';
import Loader from '../../Components/Loader';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboard } from "../../Redux/Thunks/ProductThunk";

const Home = () => {
    const { data, loading } = useSelector((state) => state.product)
    console.log("🚀 ~ Home ~ data:", data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDashboard({ order_type: "Tradeshow" }));
    }, [dispatch]);


    if (loading) return <Loader />;
    return (
        <>
            <div className='grid grid-cols-3 overflow-y-auto gap-1'>
                {
                    data && data.filter_data && data.filter_data.category && data.filter_data.category.map((item, index) => {
                        return (
                            <div key={index} className='rounded border border-solid border-slate-600'>
                                <img src={`https://raymondmart.com/media/tradeshow/category/${item.name}.jpg`} />
                            </div>
                        )
                    })
                }
            </div>
        </ >
    )
}

export default Home