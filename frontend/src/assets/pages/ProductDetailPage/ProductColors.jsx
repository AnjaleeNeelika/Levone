import React from 'react'
import { colorSelector } from '../../components/Filters/ColorsFilter'

const ProductColors = ({colors}) => {
    return (
        <div className='flex gap-3 mt-1 px-3'>
            {colors?.map((color, index) => (
                <div className='p-0.5 border-2 border-transparent hover:border-gray-200 rounded-full cursor-pointer'>
                    <div className={`rounded-full w-5 h-5 shadow-md border`} style={{background: colorSelector[color]}}></div>
                </div>
            ))}
        </div>
    )
}

export default ProductColors