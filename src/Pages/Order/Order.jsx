import React, { useEffect, useState } from 'react'
import { MdGpsFixed, MdOutlineClear } from "react-icons/md";
import Loader from '../../Components/Loader';
import { AiOutlineCheck } from "react-icons/ai";
// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllOrder } from "../../Redux/Thunks/OrderThunk";
import { Link } from 'react-router-dom';


const Order = () => {
    const { data, loading } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const [tab, setTab] = useState(false);
    const getGPSLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    localStorage.setItem("location", JSON.stringify(res.coords))
                    // setTab(true)
                },
                (err) => {
                    console.log(err.message)
                },
            );
        };
    };

    useEffect(() => {
        dispatch(fetchAllOrder({ order_type: "tradeshow" }));
        getGPSLocation()
    }, [dispatch])

    if (loading) return <Loader />;
    return (
        <>
            {/* <div className="grid">
                <span className="font-bold text-red-400 flex items-center gap-1">
                    <MdGpsFixed />Current Location</span>
                <span className="text-xs cursor-pointer" onClick={(e) => getGPSLocation(e)}>Using GPS</span>
            </div> */}
            <div
                onClick={() => setTab(false)}
                className={`fixed inset-0 bg-slate-500 bg-opacity-35 z-10 transition-opacity duration-500 ${tab ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    onClick={(e) => e.stopPropagation()} // prevent modal close on content click
                    className={`absolute bottom-0 left-0 w-full h-[300px] bg-white rounded-t-xl shadow-lg p-4 transition-all duration-500 ease-in-out ${tab ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                        }`}
                >
                    <div className="flex justify-between items-center">
                        <span className="text-3xl">Thank You</span>
                        <button onClick={() => setTab(false)}><MdOutlineClear /></button>
                    </div>
                    <hr />
                </div>
            </div>

            <div className='flex flex-col gap-1 capitalize'>
                {
                    data && data.map((item, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={`${item.order.order_status == "active" ? "" : ""} w-full flex items-center 
                                    justify-between border border-solid border-slate-300 rounded p-2`}
                                >
                                    <div className='flex flex-col'>
                                        <Link to={`/order-details?order_id=${item.order.order_id}`} className='flex gap-2 items-center'>
                                            <span className='text-lg'>{item.order.order_id}</span>
                                        </Link>
                                        <span className='text-sm flex gap-1 items-center capitalize text-slate-400'>
                                            Order {item.order.order_status}
                                            <AiOutlineCheck
                                                className={`text-white ${item.order.order_status == "active" ? "bg-green-500 rounded-full w-4 h-4" : ""}`} />
                                        </span>
                                        <span className='text-sm text-slate-400 '>Buyer: {(item.order.buyer_name).toLowerCase()}</span>
                                        <span className='text-sm text-slate-400'>Place at {item.order.order_date}</span>
                                    </div>
                                    <div className='flex flex-col text-end'>
                                        <span className='text-lg text-slate-400 '>₹{item.order.total_price}</span>
                                        <span className='text-sm text-slate-400'>{item.order.order_type}</span>
                                        <span className='text-xs flex gap-1 items-center capitalize underline text-blue-500'>
                                            Download Order
                                        </span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Order



