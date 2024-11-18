import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const Card = ({imagePath, title, description, actionArrow, height, width}) => {
    return (
        <div className='flex flex-col p-8 bg-white border rounded shadow hover:scale-105 cursor-pointer w-fit h-fit'>
            <img src={imagePath} alt={title} className={`w-[${width ? width: '200px'}] h-[${height ? height:'260px'}] bg-cover bg-center border rounded`} />
            <div className='mt-5 flex justify-between'>
                <div className='flex flex-col'>
                    <p className='text-[16px] font-semibold'>{title}</p>
                    {description && <p className='text-[12px] text-gray-500'>{description}</p>}
                </div>
                {actionArrow && 
                    <span>
                        <IoIosArrowForward className='w-8 h-8 text-gray-500' />
                    </span>
                }
            </div>   
        </div>
    )
}

export default Card