import React, { useEffect, useState } from 'react';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineShopping,
    AiOutlineScan,
    AiOutlineHeart,
    AiOutlineSearch
} from "react-icons/ai";
import { NavLink } from 'react-router-dom';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from "../Redux/Thunks/CartThunk";

const Layout = ({ children }) => {
    const { data, loading } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Raymond | Tradeshow"
        dispatch(fetchCart({ order_type: "tradeshow" }));
    }, [dispatch]);


    const words = [
        "Search shocks or shoes",
        "Search t-shirts or shirts",
        "Search jackets or jeans"
    ];
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? 50 : 120;

        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentWord.length) {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentWord.length) {
                setIsDeleting(true);
                typingSpeed = 1500; // pause before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex]);


    return (
        <>
            {/* Mobile View */}
            <div className='min-h-screen relative sm:md:lg:xl:hidden select-none font-roboto'>
                {/* Mobile Header */}
                <div className='fixed flex justify-center items-center w-full bg-white p-1 gap-2 border-b border-slate-300 shadow-md z-10 min-h-12'>
                    <NavLink to="/" className='flex justify-center items-center text-white'>
                        <img src={"/icons/logo.png"} alt="logo" className='w-12' />
                    </NavLink>

                    <div className="w-full flex items-center border border-slate-300 rounded-full px-3 py-1 gap-2 text-red-500 text-xl shadow-md">
                        <input
                            type="text"
                            className="flex-1 outline-none text-sm font-normal text-black"
                            placeholder={text + "|"}
                        />
                        <AiOutlineSearch className="text-2xl cursor-pointer" />
                    </div>
                    <NavLink
                        to="/wishlist"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 text-slate-600`}
                    >
                        <AiOutlineHeart className='text-xl' />
                    </NavLink>
                </div>

                <div className='py-[60px] px-2'>
                    {children}
                </div>

                {/* Mobile NAV */}
                <div className='text-white bottom-0 fixed flex w-full bg-white justify-between items-center text-center shadow-md border-t border-slate-300 min-h-14'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                    >
                        <AiOutlineHome className="text-xl" />
                        <span className="text-xs">Home</span>
                    </NavLink>
                    <NavLink
                        to="/scan"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                    >
                        <AiOutlineScan className='text-xl' />
                        <span className='text-xs'>Scan</span>
                    </NavLink>
                    <NavLink
                        to="/order"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                    >
                        <AiOutlineShopping className='text-xl' />
                        <span className='text-xs'>Orders</span>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600 relative`}
                    >
                        <AiOutlineShoppingCart className='text-xl' />
                        <span className='text-xs'>Cart</span>
                        <span className='border border-slate-600 rounded-full absolute top-0 right-[20%] bg-white w-5 h-5 text-slate-600 text-xs flex justify-center items-center'
                        >
                            {data.totalCartCount ? data.totalCartCount : 0}
                        </span>
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                    >
                        <AiOutlineUser className='text-xl' />
                        <span className='text-xs'>Profile</span>
                    </NavLink>
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden sm:md:lg:xl:block'>
                <div className='min-h-screen'>
                    <div className='flex w-full bg-white p-1 gap-2 border-b border-slate-300 shadow-md'>
                        <NavLink to="/" className='flex justify-center items-center text-white'>
                            <img src={"/icons/logo.png"} alt="logo" className='w-12' />
                        </NavLink>

                        <div className='w-full flex justify-center items-center gap-2 text-red-500 text-xl border border-slate-300'>
                            <div className='w-[80%]'>
                                <input className='p-2 outline-none text-sm' placeholder='Search...' />
                            </div>
                            <div className='w-[20%] flex justify-center items-center'>
                                <AiOutlineSearch className='text-2xl' />
                            </div>
                        </div>
                        <div className='text-white flex w-full bg-white justify-between items-center text-center'>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                            >
                                <AiOutlineHome className="text-xl" />
                                <span className="text-xs">Home</span>
                            </NavLink>
                            <NavLink
                                to="/cart"
                                className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600 relative`}
                            >
                                <AiOutlineShoppingCart className='text-xl' />
                                <span className='text-xs'>Cart</span>
                                <span className='border border-slate-600 rounded-full absolute top-0 right-[20%] bg-white w-5 h-5 text-slate-600 text-xs flex justify-center items-center'
                                >
                                    {data.totalCartCount ? data.totalCartCount : 0}
                                </span>
                            </NavLink>
                            <NavLink
                                to="/scan"
                                className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                            >
                                <AiOutlineScan className='text-xl' />
                                <span className='text-xs'>Scan</span>
                            </NavLink>
                            <NavLink
                                to="/order"
                                className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                            >
                                <AiOutlineShopping className='text-xl' />
                                <span className='text-xs'>Orders</span>
                            </NavLink>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) => `${isActive ? "text-red-700 font-bold rounded-xl transition-colors duration-300 ease-in-out" : ""} text-center flex flex-col justify-center items-center p-2 w-[20%] text-slate-600`}
                            >
                                <AiOutlineUser className='text-xl' />
                                <span className='text-xs'>Profile</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout