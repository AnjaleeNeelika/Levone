import React from 'react'
import { HiOutlineAdjustments } from 'react-icons/hi'

const ProductList = () => {
    return (
        <div>
            <div className='flex'>
                <div className='w-[20%] p-8 m-12 border rounded-lg '>
                    {/* Filters */}
                    <div className='flex justify-between pb-2 border-b border-b-gray-300'>
                        <p className='text-lg text-gray-500'>Filters</p>
                        <HiOutlineAdjustments className='text-2xl text-gray-400' />
                    </div>
                    <div>
                        <p className='text-black mt-5 uppercase'>Categories</p>
                    </div>
                </div>

                <div className='p-10 bg-slate-200'>
                    {/* Products */}
                    <p>Hello2</p>
                </div>
            </div>
        </div>
    )
}

export default ProductList