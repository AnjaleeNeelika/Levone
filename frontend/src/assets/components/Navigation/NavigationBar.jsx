import React from 'react'
import Logo from '../../logo/transparent_bg.png'

const NavigationBar = () => {
    return (
        <nav className='flex items-center py-6 px-16 justify-between gap-40'>
            <div className='flex items-center gap-6'>
                {/* Logo */}
                <a href='/' className='text-3xl text-black gap-8'>Levone</a>
                {/* <img src={Logo} className='h-14' /> */}
            </div>  
            <div className='flex flex-wrap items-center gap-10 flex-1'>
                {/* Navigation Items */}
                <ul className='flex gap-14'>
                    <li className='text-gray-600 hover:text-black'><a href="/">Shop</a></li>
                    <li className='text-gray-600 hover:text-black'><a href="/men">Men</a></li>
                    <li className='text-gray-600 hover:text-black'><a href="/women">Women</a></li>
                    <li className='text-gray-600 hover:text-black'><a href="/kids">Kids</a></li>
                </ul>
            </div>          

            <div>
                {/* Search Bar */}
            </div>

            <div>
                {/* Action items - icons */}
            </div>
        </nav>
    )
}

export default NavigationBar