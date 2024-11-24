import React from 'react'
import { IoHeartOutline } from 'react-icons/io5'

const ProductCard = ({title, description, price, discount, rating, brand, thumbnail}) => {
    return (
        <div className='flex flex-col bg-white hover:scale-105 cursor-pointer w-fit h-fit relative'>
            <img src={thumbnail} alt={title} className='h-[320px] w-[280px] object-cover bg-center border-2 rounded-xl shadow-md' />
            <button 
                className='absolute right-0 m-2 bg-white p-2 rounded-full shadow-lg border-2 w-fit h-fit cursor-pointer'
                onClick={() => console.log("Button clicked")}
            >
                <IoHeartOutline className='text-2xl text-[#225772]' />
            </button>
            <div className='mt-3 flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='text-[16px] font-semibold max-w-[150px]'>{title}</p>
                    {description && <p className='text-[12px] text-gray-500'>{brand}</p>}
                </div>
                <div className='bg-[#f3f3f3] bg-fit h-fit py-2 px-4 rounded border'>
                    <p className='text-sm text-black'>Rs. {price}</p>
                </div>
            </div>   
        </div>
    )
}

export default ProductCard