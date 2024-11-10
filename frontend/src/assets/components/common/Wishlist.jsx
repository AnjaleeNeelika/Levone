import React, { useState } from 'react'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

const Wishlist = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='rounded-full w-fit h-fit' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? 
                <IoHeart className='h-6 w-6' />
                :
                <IoHeartOutline className='w-6 h-6' />
            }
        </div>
    )
}

export default Wishlist