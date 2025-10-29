import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiOutlineUser,
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineSearch
} from "react-icons/ai";

const Profile = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-1'>
                <Link
                    to="/order"
                    className='w-full p-2 border border-solid border-slate-500 shadow-md active:bg-red-300 font-semibold text-slate-500 rounded flex items-center justify-center text-xs gap-2'
                >
                    <AiOutlineShopping className='text-xl' />
                    My Order
                </Link >
                <Link
                    to="/order-report"
                    className='w-full p-2 border border-solid border-slate-500 shadow-md active:bg-red-300 font-semibold text-slate-500 rounded flex items-center justify-center text-xs gap-2'
                >
                    <AiOutlineSearch className='text-xl' />
                    Order Reports
                </Link >
                <Link
                    to="/wishlist"
                    className='w-full p-2 border border-solid border-slate-500 shadow-md active:bg-red-300 font-semibold text-slate-500 rounded flex items-center justify-center text-xs gap-2'
                >
                    <AiOutlineHeart className='text-xl' />
                    Wishlist
                </Link >
                <Link
                    to="/profile"
                    className='w-full p-2 border border-solid border-slate-500 shadow-md active:bg-red-300 font-semibold text-slate-500 rounded flex items-center justify-center text-xs gap-2'
                >
                    <AiOutlineUser className='text-xl' />
                    My Addresses
                </Link >
            </div>
        </>
    )
}

export default Profile