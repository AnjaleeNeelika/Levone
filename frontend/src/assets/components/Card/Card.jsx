import React from 'react'
import Skirt from '../../images/white-skirt.jpg'

const Card = () => {
    return (
        <div className='flex flex-col p-8 bg-white border w-[260px] h-[400px]'>
            <img src={Skirt} alt="Skirt" className='max-w-[240px] max-h-[260px] bg-cover bg-center border rounded' />
            <p className='text-[16px] font-semibold mt-2'>Skirt</p>
        </div>
    )
}

export default Card