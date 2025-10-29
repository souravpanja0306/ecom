import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";

const PageNotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-7xl text-red-600 font-bold'>404</h1>
            <h1 className='text-sm text-slate-600'>Page not found</h1>
            <Link to="/" className='py-4 underline text-blue-600 flex gap-1 justify-center items-center'>
                <AiOutlineHome />
                <span>Back to Home</span>
            </Link>
        </div>
    )
}

export default PageNotFound