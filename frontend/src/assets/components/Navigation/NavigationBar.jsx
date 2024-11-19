import React, { useState } from 'react'
import Logo from '../../logo/transparent_bg.png'
import { IoSearchOutline } from 'react-icons/io5'
import Wishlist from '../common/Wishlist';
import AccountIcon from '../common/AccountIcon';
import CartIcon from '../common/CartIcon';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    const [selected, setSelected] = useState("");

    const changeSelected = (props) => {
        setSelected(props);
    };

    return (
        <nav className='flex items-center py-6 px-16 justify-between gap-40'>
            <div className='flex items-center gap-6'>
                {/* Logo */}
                <a href='/' className='text-3xl text-black gap-8 font-bold'>Levone</a>
                {/* <img src={Logo} className='h-14' /> */}
            </div>  
            <div className='flex flex-wrap items-center gap-10 flex-1'>
                {/* Navigation Items */}
                <ul className='flex gap-14 text-gray-500'>
                    <NavLink 
                        to={{
                            pathname: '/'
                        }}
                        className={({isActive}) => isActive ? 'text-black font-semibold' : 'hover:text-black'}
                    >
                        Shop
                    </NavLink>
                    <NavLink 
                        to={{
                            pathname: '/men'
                        }}
                        className={({isActive}) => isActive ? 'text-black font-semibold' : 'hover:text-black'}
                    >
                        Men
                    </NavLink>
                    <NavLink 
                        to={{
                            pathname: '/women'
                        }}
                        className={({isActive}) => isActive ? 'text-black font-semibold' : 'hover:text-black'}
                    >
                        Women
                    </NavLink>
                    <NavLink 
                        to={{
                            pathname: '/kids'
                        }}
                        className={({isActive}) => isActive ? 'text-black font-semibold' : 'hover:text-black'}
                    >
                        Kids
                    </NavLink>
                </ul>
            </div>          

            <div className='flex justify-center'>
                {/* Search Bar */}
                <div className='border rounded flex overflow-hidden'>
                    <div className='flex items-center justify-center px-4 order-1 bg-gray-100'>
                        <IoSearchOutline />
                        <input type="text" name="" id="" className='px-4 py-2 outline-none bg-transparent' placeholder='Search' />
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-4'>
                {/* Action items - icons */}
                <ul className='flex items-center gap-8'>
                    <NavLink>
                            <Wishlist />
                    </NavLink>
                    <NavLink>
                            <AccountIcon />
                    </NavLink>
                    <NavLink>
                            <CartIcon />
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar