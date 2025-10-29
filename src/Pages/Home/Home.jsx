import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let [data, setData] = React.useState([
        {
            id: 1,
            category: "Apparel",
            bg: "https://www.raymondmart.com/tradeshow/assets/images/Intersection%20815.jpg",
            sub_category: [
                { short: "FA", long: "Tradeshow" },
                { short: "FA", long: "Value Line" }
            ]
        },
        {
            id: 1,
            category: "Accessories",
            bg: "https://www.raymondmart.com/tradeshow/assets/images/Intersection%20814.jpg",
            sub_category: [
                { short: "FA", long: "Fashion Accessories" },
                { short: "IW", long: "Innerwear" },
                { short: "LA", long: "Leather Accessories" },
            ]
        },
    ]);

    return (
        <>
            <div className='flex flex-col justify-center item-center gap-2'>
                {
                    data && data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='flex flex-col items-center justify-center w-full h-60 active:bg-green-200 bg-gray-200 rounded-lg shadow-md gap-2 relative'
                                style={{ backgroundImage: `url(${item.bg})`, backgroundPosition: 'center' }}
                            >
                                <h1 className='absolute left-0 top-0 text-white font-bold bg-red-600 p-2 rounded shadow-lg'>{item.category}</h1>
                                {
                                    item.sub_category.length > 0 ?
                                        <div className='flex flex-col gap-2 items-center justify-center overflow-scroll'>
                                            {
                                                item.sub_category.map((sub_item, sub_index) => {
                                                    return (
                                                        item.category == "Accessories"
                                                            ? <Link to={`/brand-selection?order_type=Accessories&accessories_category=${sub_item.short}`} >
                                                                <div key={sub_index} className='w-48 text-center text-black font-bold p-2 border border-slate-200 rounded-lg active:bg-slate-300 bg-opacity-40 bg-slate-50'>{sub_item.long}</div>
                                                            </Link>
                                                            : <Link to={`/brand-selection?order_type=${sub_item.long}`} >
                                                                <div key={sub_index} className='w-48 text-center text-black font-bold p-2 border border-slate-200 rounded-lg active:bg-slate-300 bg-opacity-40 bg-slate-50'>{sub_item.long}</div>
                                                            </Link>
                                                    )
                                                })
                                            }
                                        </div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </ >
    )
}

export default Home