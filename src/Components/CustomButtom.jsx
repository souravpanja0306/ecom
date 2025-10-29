import React from 'react'

const CustomButtom = ({ title, color, hover, children }) => {
    return (
        <div className={`${color} flex justify-center items-center gap-2 min-w-28 p-2 ${hover} 
                cursor-pointer select-none rounded text-sm shadow-md`}>
            <span className='text-lg font-semibold'>{children}</span>
            <span>{title}</span>
        </div>
    )
}

export default CustomButtom