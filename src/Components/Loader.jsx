import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                    <FaSpinner className="animate-spin text-slate-500 text-4xl" />
                    <p className="text-slate-500 text-lg font-medium">Loading...</p>
                </div>
            </div>
        </>
    )
}

export default Loader