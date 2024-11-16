import React from 'react'

const Card = ({imagePath, title}) => {
    return (
        <div className='flex flex-col p-8 bg-white border rounded shadow hover:scale-105 cursor-pointer w-fit h-fit'>
            <img src={imagePath} alt="Skirt" className='w-[200px] h-[260px] bg-cover border rounded' />
            <p className='text-[16px] font-semibold mt-2'>{title}</p>
        </div>
    )
}

export default Card