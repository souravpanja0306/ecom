import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({ data }) => {
  return (
    <div className='bg-white text-[#26648e] w-60 rounded shadow'>
      <Link to={`/product_details?material_no=${data.material_no}`}>
        <img src={`${data.product_image[0]}`} alt={`${data.material_description}`} className='rounded'/>
        <div className='p-1 text-slate-600 flex flex-col gap-1'>
          <p className='truncate'>{data.material_no}</p>
          <p className='truncate text-xs'>{data.color.toUpperCase()}</p>
          <p className='truncate text-xs'>{data.brand.toUpperCase()}</p>
          <p className='truncate text-xs flex gap-1'>₹
            <span className="text-slate-500 line-through">{data.price}</span>
            <span className="text-green-500 font-semibold">{data.price - (data.price * 0 / 100)}</span>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Products