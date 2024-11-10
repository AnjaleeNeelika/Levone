import React from 'react'
import HeroImg from '../../images/Untitled.png'

const HeroSection = () => {
    return (
        // <div className='relative flex items-center bg-cover flex-start bg-center h-screen w-full' style={{backgroundImage: `url(${HeroImg})`}}>

        // </div>
        <div className='relative flex items-center flex-start h-fit w-full bg-gradient-to-t from-[#1c7a83] via-[#25a4af] to-[#2ec7d4]'>
            <div className='w-1/2 h-full'></div>
            <img src={HeroImg} alt="" className='w-1/2 mt-10 mr-10' />
        </div>
    )
}

export default HeroSection