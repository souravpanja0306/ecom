import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchDashboard } from "../../Redux/Thunks/ProductThunk";


const BrandSelection = () => {
    const [searchParams] = useSearchParams();
    const order_type = searchParams.get('order_type');
    const accessories_category = searchParams.get('accessories_category');

    const { data, loading } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    let search_key = {};
    if (order_type) search_key["order_type"] = order_type;
    if (accessories_category) search_key["accessories_category"] = accessories_category;

    useEffect(() => {
        dispatch(fetchDashboard(search_key));
    }, [dispatch]);


    if (loading) return <Loader />;
    return (
        <>
            <div className='flex flex-col gap-2'>
                <p>Dashboard</p>
                <div className='flex justify-center items-center gap-2'>
                    <div className='text-green-500 shadow-md flex flex-col justify-center items-center p-2 bg-white border border-slate-400 rounded w-[33.33%] text-center text-xl min-h-24'>
                        <span className='text-xs'>Total Orders</span>
                        <span>{data && data.dashboard ? data.dashboard.total_order : 0}</span>
                    </div>
                    <div className='text-yellow-500 shadow-md flex flex-col justify-center items-center p-2 bg-white border border-slate-400 rounded w-[33.33%] text-center text-xl min-h-24'>
                        <span className='text-xs'>Total Quantity</span>
                        <span>{data && data.dashboard ? data.dashboard.total_quantity : 0}</span>
                    </div>
                    <div className='text-red-500 shadow-md flex flex-col justify-center items-center p-2 bg-white border border-slate-400 rounded w-[33.33%] text-center text-xl min-h-24'>
                        <span className='text-xs'>Order Value</span>
                        <span>{data && data.dashboard ? data.dashboard.total_price : 0}</span>
                    </div>
                </div>

                <p>Select Brand</p>
                <div className='flex justify-center items-center gap-2'>
                    {
                        data && data.filter_data && data.filter_data.brand
                            ? data.filter_data.brand.map((item, index) => {
                                return (
                                    <Link
                                        to={`/category-selection?brand=${encodeURI(item._id)}`}
                                        key={index}
                                        className='shadow-md p-4 bg-white border border-black rounded w-[50%] text-center text-xl min-h-24'
                                        style={{
                                            backgroundImage: `url(https://www.raymondmart.com/media/tradeshow/brand/${encodeURI(item.name)}.jpg)`,
                                            backgroundPosition: 'center'
                                        }}>
                                    </Link>
                                )
                            })
                            : null
                    }
                </div>
            </div>
        </ >
    )
}

export default BrandSelection