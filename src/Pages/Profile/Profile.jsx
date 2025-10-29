import React from 'react'
import { Link } from 'react-router-dom'
import {
    AiOutlineHome,
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineSearch
} from "react-icons/ai";

const Profile = () => {
    return (
        <div className="text-slate-700 font-semibold p-4">
            {/* Profile Card */}
            <div className="flex flex-col items-center text-center border border-slate-200 shadow-md rounded-2xl p-4 bg-white">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-slate-300 shadow-sm object-cover mb-3"
                />
                <h2 className="text-lg font-bold">Sourav Panja</h2>
                <p className="text-sm text-slate-500">sourav.panja@raymon.in</p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-2 mt-4">
                <Link to="/order"
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition"
                >
                    <AiOutlineShopping className="text-xl text-slate-600" />
                    <span className="text-sm">My Orders</span>
                </Link >
                <Link to="/order-report"
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition"
                >
                    <AiOutlineSearch className="text-xl text-slate-600" />
                    <span className="text-sm">Order Reports</span>
                </Link >
                <Link to="/wishlist"
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition"
                >
                    <AiOutlineHeart className="text-xl text-slate-600" />
                    <span className="text-sm">Wishlist</span>
                </Link >
                <Link to="/address"
                    className="flex items-center gap-2 p-3 border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition"
                >
                    <AiOutlineHome className="text-xl text-slate-600" />
                    <span className="text-sm">Address</span>
                </Link >
            </div>
        </div>
    )
}

export default Profile