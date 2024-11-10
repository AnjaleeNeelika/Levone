import React, { useState } from 'react'
import { IoPerson, IoPersonOutline } from 'react-icons/io5'

const AccountIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='rounded-full w-fit h-fit' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {isHovered ? 
                <IoPerson className='h-6 w-6' />
                :
                <IoPersonOutline className='w-6 h-6' />
            }
        </div>
    )
}

export default AccountIcon