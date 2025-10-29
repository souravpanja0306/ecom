import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import CustomButtom from '../../Components/CustomButtom';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import Breadcrumb from '../../Components/Breadcrumb';
import Loader from '../../Components/Loader';

// REDUX...
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from "../../Redux/Thunks/WishlistThunk";
import { fetchSingalProducts } from "../../Redux/Thunks/ProductThunk";

const ProductDetails = () => {
    const [searchParams] = useSearchParams();
    const material_no = searchParams.get('material_no');

    const { data, loading } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSingalProducts({ material_no: material_no }));
    }, [dispatch]);

    const addWishList = async ({
        product_id = "",
        product_type = "",
    }) => {
        let result = await dispatch(addToWishlist({
            product_id: product_id,
            product_type: product_type
        }));
    };

    const breadcrumbItems = [
        { label: "Home", href: "/" },
        { label: "Products Details", href: "/product_details" },
    ];
    if (loading) return <Loader />;
    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            {
                data && data.productData && data.productData.map((item, index) => {
                    return (
                        <div className='w-full bg-white border border-solid border-slate-400 rounded' key={index}>
                            <div className='rounded'>
                                <img className="rounded" src={`${item.product_image[0]}`} alt={`${item.material_description}`} />
                            </div>
                            <div className='flex justify-start items-center'>
                                {
                                    data && data.product_shade && data.product_shade.map((similar, index_1) => {
                                        return (
                                            <div key={index_1} className='bg-green p-1'>
                                                <Link to={`/product_details?material_no=${similar.name}`}>
                                                    <img src={similar.product_image_xl} alt="" className='h-24' />
                                                </Link>
                                                <p className='text-xs'>{similar.color}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='text-slate-600 p-2 rounded'>
                                <p className='truncate text-xl text-slate-600'>{item.material_description}</p>
                                <p className='truncate'>{item.material_no.toUpperCase()}</p>
                                <p className='truncate'>{item.color.toUpperCase()}</p>
                                <p className='truncate'>{item.brand.toUpperCase()}</p>
                            </div>
                            <div className='flex gap-2 justify-end items-center w-full p-2'>
                                <div>
                                    <CustomButtom title="Add To Cart" color="bg-green-500 text-white active:bg-green-700" >
                                        <AiOutlineShoppingCart />
                                    </CustomButtom>
                                </div>

                                <div onClick={() => addWishList({ product_id: item.product_id, product_type: "tradeshow" })}>
                                    <CustomButtom title="Add To Wishlist" color="bg-red-500 text-white active:bg-red-700">
                                        <AiOutlineHeart />
                                    </CustomButtom>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductDetails