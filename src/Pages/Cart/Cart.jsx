import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../Components/Breadcrumb'
import { IoHeartOutline, IoCloseOutline, IoOptionsOutline, IoTrashOutline } from "react-icons/io5";
import Loader from '../../Components/Loader';
import { Link } from 'react-router-dom';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, deleteCart } from "../../Redux/Thunks/CartThunk";
import { addToWishlist, deleteWishlist } from "../../Redux/Thunks/WishlistThunk";
import CustomButtom from '../../Components/CustomButtom';


const Cart = () => {
  const [showActions, setShowActions] = useState(false);

  const { data, loading } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart({ order_type: "tradeshow" }));
  }, [dispatch]);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  const removeFromCart = ({
    index = "",
    material_no = "",
    buyer_id = "",
  }) => {
    dispatch(deleteCart({
      material_no: material_no,
      buyer_id: buyer_id
    }))
    dispatch(fetchCart({ order_type: "tradeshow" }));
    setShowActions({ status: false, index: index })
  };

  if (loading) return <Loader />;
  return (
    <div className='p-2 h-screen overflow-x-scroll'>
      <Breadcrumb items={breadcrumbItems} />
      <div className='flex flex-col gap-1'>
        {
          data && data.cart_data && data.cart_data.length


            ? data.cart_data.map((item, index) => {
              return (
                <div className="relative w-full overflow-hidden" key={index}>
                  <div className={`gap-2 absolute right-0 top-0 h-full flex transition-transform duration-300 ${index === showActions.index && showActions.status ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button
                      className="bg-red-600 text-white w-14 rounded flex justify-center items-center text-xl"
                      onClick={() => removeFromCart({ index: index, material_no: item.material_no, buyer_id: data.distinctBuyerInCart[0]._id })}
                    >
                      <IoTrashOutline />
                    </button>
                    <button
                      className="bg-green-500 text-white w-14 rounded flex justify-center items-center text-xl"
                      onClick={() => dispatch(addToWishlist({ product_id: item.product_id }))}
                    >
                      <IoHeartOutline />
                    </button>
                  </div>
                  <div className={`flex items-center gap-1 bg-white border border-slate-200 shadow-lg rounded p-1 transition-transform duration-300 ${index === showActions.index && showActions.status ? '-translate-x-32' : 'translate-x-0'}`}>

                    <div className='w-[60%] flex gap-1'>
                      <Link to={`/product_details?material_no=${item.material_no}`}>
                        <img className="rounded w-24 h-24 object-cover" src={item.image[0]} alt={item.category} />
                      </Link>
                      <div className="text-slate-600 flex flex-col justify-center">
                        <p className="truncate text-xl">{item.category}</p>
                        <p className="truncate text-xs">{item.material_no.toUpperCase()}</p>
                        <p className="truncate text-xs">{item.color.toUpperCase()}</p>
                        <p className="truncate text-xs">{item.brand.toUpperCase()}</p>
                      </div>
                    </div>

                    <div className='w-[40%] flex justify-center gap-1'>
                      <div className='flex border-solid border border-slate-500 rounded'>
                        <button className='text-xl p-2 active:bg-red-300'>-</button>
                        <input className='w-12 text-center p-2 active:bg-red-300' defaultValue={item.total_quantity} />
                        <button className='text-xl p-2 active:bg-red-300'>+</button>
                      </div>
                      {
                        index === showActions.index && showActions.status
                          ?
                          <div
                            onClick={() => setShowActions({ status: false, index: index })}
                            className='flex justify-center items-center border-solid border border-slate-500 rounded p-2 active:bg-red-300'
                          >
                            <IoCloseOutline className='text-xl' />
                          </div>
                          :
                          <div
                            onClick={() => setShowActions({ status: true, index: index })}
                            className='flex justify-center items-center border-solid border border-slate-500 rounded p-2 active:bg-red-300'
                          >
                            <IoOptionsOutline className='text-xl' />
                          </div>
                      }
                    </div>

                  </div>
                </div>
              )
            })


            : <div className='flex flex-col justify-center items-center gap-2'>
              <img src='./icons/empty_cart_1.gif' className='h-24 w-24' />
              <p className='font-bold'>You cart is Empty, add some items</p>
              <Link to="/" className='p-2 rounded border border-solid border-slate-500 text-slate-500 cursor-pointer active:bg-green-300'>
                Back to Shopping
              </Link>
            </div>

        }
      </div >
      <div className='absolute bottom-0 left-0 w-full p-2'>
        <CustomButtom color="bg-red-400 text-white" children={"Place Order"} />
      </div>

    </div>
  )
}

export default Cart