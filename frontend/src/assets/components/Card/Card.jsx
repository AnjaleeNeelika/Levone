import React from 'react'

const Card = ({imagePath, title, description, actionArrow}) => {
    return (
        <div className='flex flex-col p-8 bg-white border rounded shadow hover:scale-105 cursor-pointer w-fit h-fit'>
            <img src={imagePath} alt="Skirt" className='w-[200px] h-[260px] bg-cover border rounded' />
            <div className='mt-5 flex justify-between'>
                <div className='flex flex-col p-5'>
                    <p className='text-[16px] font-semibold'>{title}</p>
                    {description && <p className='text-[16px] font-semibold'>{description}</p>}
                </div>
                {actionArrow && <div></div>}
            </div>   
        </div>
    )
}

export default Card