import React, { useEffect } from 'react';
import CustomButtom from '../../Components/CustomButtom';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Breadcrumb from '../../Components/Breadcrumb';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { fetchWishlist, deleteWishlist } from "../../Redux/Thunks/WishlistThunk";
import Loader from '../../Components/Loader';

const Wishlist = () => {
  const { data, loading } = useSelector((state) => state.wishlist)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  //   <div className='w-full flex flex-col justify-center items-center'>
  //   <p>Your wishlist is empty.</p>
  //   <Link to="/" className='text-blue-500'> Go to Products</Link>
  // </div>


  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Wishlist", href: "/wishlist" },
  ];

  if (loading) return <Loader />;
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='flex overflow-y-auto gap-1'>
        {
          data && data.map((item, index) => {
            return (
              <div className='w-60 shrink-0 bg-white text-[#26648e] rounded relative shadow' key={index}>
                <Link to={`/product_details?material_no=${item.material_no}`}>
                  <img src={`${item.product_image[0]}`} alt={`${item.material_description}`} className='rounded' />
                </Link>
                <div className='p-1 text-slate-600 flex flex-col gap-1'>
                  <p className='truncate'>{item.material_no}</p>
                  <p className='truncate text-xs'>{item.color.toUpperCase()}</p>
                  <p className='truncate text-xs'>{item.brand.toUpperCase()}</p>
                  <p className='truncate text-xs flex gap-1'>₹
                    <span className="text-slate-500 line-through">{item.price}</span>
                    <span className="text-green-500 font-semibold">{item.price - (item.price * 0 / 100)}</span>
                  </p>
                </div>
                <div className='flex gap-2 justify-start items-center w-full p-2' onClick={() => dispatch(deleteWishlist({ product_id: item.product_id }))} >
                  <CustomButtom title="Remove From Wishlist" color="bg-red-600 text-white active:bg-red-600 w-full">
                    <AiOutlineHeart />
                  </CustomButtom>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Wishlist