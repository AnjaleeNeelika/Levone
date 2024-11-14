import React from 'react'
import HeroImg from '../../images/Untitled.png'

const HeroSection = () => {
    return (
        // <div className='relative flex items-center bg-cover flex-start bg-center h-screen w-full' style={{backgroundImage: `url(${HeroImg})`}}>

        // </div>
        <div className='relative flex items-center h-fit w-full bg-gradient-to-t from-[#1c7a83] via-[#25a4af] to-[#2ec7d4]'>
            <div className='w-3/5 min-w-[500px] h-full p-4 text-center'>
                <div className='text-4xl lg:text-5xl xl:text-6xl text-white min-w-96'>
                    Find Your Perfect Look, <br />
                    Every Time
                </div>

                <button className='bg-white rounded-md px-10 py-3 shadow-md mt-16 hover:bg-black hover:text-white'>Shop Now</button>             
                
            </div>

            <div className='w-2/5 flex justify-center'>
                <img src={HeroImg} alt="" className='w-full min-w-[300px] mt-10 mr-10' />
            </div>
            
        </div>
    )
}

export default HeroSection