import React, { useState } from 'react'
import { IoCart, IoCartOutline } from 'react-icons/io5'

const CartIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='rounded-full w-fit h-fit' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? 
                <IoCart className='h-7 w-7' />
                :
                <IoCartOutline className='w-7 h-7' />
            }
        </div>
    )
}

export default CartIcon