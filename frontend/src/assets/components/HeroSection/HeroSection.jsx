import React from 'react'
import HeroImg from '../../images/Untitled.png'

const HeroSection = () => {
    return (
        // <div className='relative flex items-center bg-cover flex-start bg-center h-screen w-full' style={{backgroundImage: `url(${HeroImg})`}}>

        // </div>
        <div className='relative flex items-center flex-start h-fit w-full bg-gradient-to-t from-[#1c7a83] via-[#25a4af] to-[#2ec7d4]'>
            <div className='w-full h-full p-4 text-center'>
                <div className='text-6xl text-white'>
                    Find Your Perfect Look, <br />
                    Every Time
                </div>

                <button className='bg-white rounded-md px-10 py-3 shadow-md mt-16 border border-gray-400'>Shop Now</button>
                
                
            </div>
            <img src={HeroImg} alt="" className='w-1/3 mt-10 mr-10' />
        </div>
    )
}

export default HeroSection