import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Img1 from '../../images/pink-women-hoodie.jpeg'
import Img2 from '../../images/valentina-sarees-for-wedding-1.jpg'
import { IoAdd, IoRemove, IoTrashBin } from 'react-icons/io5';
import { ImBin, ImBin2 } from 'react-icons/im';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Footer from '../../components/Footer/Footer'
import content from '../../../data/content.json'

const AddToCart = () => {

    const [breadcrumbLinks, setBreadcrumbLinks] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity+1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1);
        }        
    };

    useEffect(() => {
        const arrayLinks = [
            { 
                title: 'Home', path: '/' 
            }, 
            {
                title: 'Add To Cart', path: '/add-to-cart'
            }
        ];

        setBreadcrumbLinks(arrayLinks);
    }, []);

    return (
        <div>
            <div className='py-10 px-14 mb-10'>
                <Breadcrumb links={breadcrumbLinks} />

                <div className='py-10 w-full'>
                    <table className='w-full'>
                        <tr className='text-left uppercase'>
                            <th className='w-1/3 p-5'>Product Details</th>
                            <th className='w-1/6 p-5'>Price</th>
                            <th className='w-1/6 p-5'>Quantity</th>
                            <th className='w-1/6 p-5'>Shipping</th>
                            <th className='w-1/6 p-5'>Subtotal</th>
                            <th className='w-1/6 p-5'>Action</th>
                        </tr>
                        
                        <tr className='text-gray-500 text-left border-b-2 border-gray-100'>
                            <td className='p-5 flex gap-5'>
                                <img src={Img1} alt="img_1" className='w-28 h-32 object-cover rounded-lg border border-gray-300' />
                                <div className='mt-3'>
                                    <p>Pink Hoodie</p>
                                    <p className='text-gray-400 mt-3 text-sm'>Color: Pink</p>
                                    <p className='text-gray-400 text-sm'>Size: M</p>
                                </div>
                            </td>
                            <td className='p-5'>$37.00</td>
                            <td className='p-5'>
                                <div className='flex items-center bg-gray-100 rounded-lg w-fit'>
                                    <button 
                                        className='py-3 px-4 hover:bg-gray-200 rounded-l-lg'
                                        onClick={decrement}
                                    >
                                        <IoRemove className='text-black' />
                                    </button>
                                    {/* <input type="number" name="quantity" id="" disabled className='w-28 py-2 border-x-2 border-gray-200 text-center bg-slate-200' placeholder={quantity} min={1} /> */}
                                    <div className='w-20 px-6 border-x-2 border-gray-200 text-center'>{quantity}</div>
                                    <button 
                                        className='py-3 px-4 hover:bg-gray-200 rounded-r-lg'
                                        onClick={increment}
                                    >
                                        <IoAdd className='text-black' />
                                    </button>
                                </div>
                            </td>
                            <td className='text-gray-400 p-5'>Free</td>
                            <td className='p-5'>$37.00</td>
                            <td className='p-5'>
                                <RiDeleteBin5Line className='w-6 h-6 text-gray-500' />
                            </td>
                        </tr> 

                        <tr className='text-gray-500 text-left border-b-2 border-gray-100'>
                            <td className='p-5 flex gap-5'>
                                <img src={Img2} alt="img_1" className='w-28 h-32 object-cover rounded-lg border border-gray-300' />
                                <div className='mt-3'>
                                    <p>Brown Valentina Saree</p>
                                    <p className='text-gray-400 mt-3 text-sm'>Color: Brown</p>
                                    <p className='text-gray-400 text-sm'>Size: -</p>
                                </div>
                            </td>
                            <td className='p-5'>$30.00</td>
                            <td className='p-5'>
                                <div className='flex items-center bg-gray-100 rounded-lg w-fit'>
                                    <button 
                                        className='py-3 px-4 hover:bg-gray-200 rounded-l-lg'
                                        onClick={decrement}
                                    >
                                        <IoRemove className='text-black' />
                                    </button>
                                    {/* <input type="number" name="quantity" id="" disabled className='w-28 py-2 border-x-2 border-gray-200 text-center bg-slate-200' placeholder={quantity} min={1} /> */}
                                    <div className='w-20 px-6 border-x-2 border-gray-200 text-center'>{quantity}</div>
                                    <button 
                                        className='py-3 px-4 hover:bg-gray-200 rounded-r-lg'
                                        onClick={increment}
                                    >
                                        <IoAdd className='text-black' />
                                    </button>
                                </div>
                            </td>
                            <td className='text-gray-400 p-5'>$2.00</td>
                            <td className='p-5'>$30.00</td>
                            <td className='p-5'>
                                <RiDeleteBin5Line className='w-6 h-6 text-gray-500' />
                            </td>
                        </tr>                    
                    </table>
                </div>

                <div className='flex flex-wrap justify-between gap-10 mt-10'>
                    <div>
                        <p className='text-xl font-semibold'>Discount Codes</p>
                        <p className='text-sm text-gray-400 mt-1'>Enter your coupon code if you have one</p>

                        <div className='flex items-center mt-10 rounded-md border border-gray-300 w-fit'>
                            <input type="text" name="coupon-code" id="" className='rounded-md h-9 outline-none py-2 px-4 text-gray-500' />
                            <button className='bg-black text-white text-sm h-10 px-10 rounded-r-md hover:opacity-80'>Apply Coupon</button>
                        </div>
                    </div>
                    <div className='w-fit bg-gray-100 rounded-md shadow-md text-gray-400 border border-gray-200'>
                        <div className='py-10 px-20'>
                            <div className='flex justify-between gap-10'>
                                <p>Sub Total</p>
                                <p>$67.00</p>
                            </div>
                            <div className='flex justify-between gap-10 mt-2'>
                                <p>Shipping</p>
                                <p>$2.00</p>
                            </div>
                            <div className='flex justify-between gap-10 mt-10'>
                                <p>Grand Total</p>
                                <p>$69.00</p>
                            </div>
                        </div>
                        <div className='w-full py-10 px-20 border-t-2 border-white'>
                            <button className='bg-black text-white text-sm px-8 py-2 rounded-md shadow-md hover:opacity-80'>Login To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer content={content?.footer} />
        </div>
    )
}

export default AddToCart