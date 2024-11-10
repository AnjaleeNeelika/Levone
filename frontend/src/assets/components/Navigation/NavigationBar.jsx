import React, { useState } from 'react'
import Logo from '../../logo/transparent_bg.png'
import { IoSearchOutline } from 'react-icons/io5'
import Wishlist from '../common/Wishlist';
import AccountIcon from '../common/AccountIcon';
import CartIcon from '../common/CartIcon';

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
                <ul className='flex gap-14'>
                    <li className={`text-gray-600 hover:text-black`}><a href="/">Shop</a></li>
                    <li className={`text-gray-600 hover:text-black`} ><a href="/men">Men</a></li>
                    <li className='text-gray-600 hover:text-black'><a href="/women">Women</a></li>
                    <li className='text-gray-600 hover:text-black'><a href="/kids">Kids</a></li>
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
                    <li>
                        <button>
                            <Wishlist />
                        </button>
                    </li>
                    <li>
                        <button>
                            <AccountIcon />
                        </button>
                    </li>
                    <li>
                        <button>
                            <CartIcon />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar