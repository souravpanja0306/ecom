import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";

const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-center px-4">
            {/* Big 404 */}
            <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-500 drop-shadow-lg">
                404
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mt-2">
                Oops! Page not found
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            {/* Back to Home Button */}
            <Link
                to="/"
                className="bg-white mt-6 flex items-center gap-2 p-3 border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition"
            >
                <AiOutlineHome className="text-xl text-red-500" />
                <span className="text-sm">Back to Home</span>
            </Link>
        </div>
    )
}

export default PageNotFound