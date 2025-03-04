import React, { useState } from 'react'
import Logo from '../../logo/transparent_bg.png'
import { IoSearchOutline } from 'react-icons/io5'
import Wishlist from '../common/Wishlist';
import AccountIcon from '../common/AccountIcon';
import CartIcon from '../common/CartIcon';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = ({ variant="default" }) => {
    const [selected, setSelected] = useState("");

    const changeSelected = (props) => {
        setSelected(props);
    };

    return (
        <nav className='flex items-center py-6 px-10 md:px-16 justify-between shadow-md w-full'>
            <div className='w-fit flex items-center gap-6'>
                {/* Logo */}
                <a href='/' className='text-3xl text-black gap-8 font-bold'>Levone</a>
                {/* <img src={Logo} className='h-14' /> */}
            </div>  
            { variant === "default" && 
                <div className='flex flex-wrap items-center gap-10'>
                    {/* Navigation Items */}                
                    <ul className='flex gap-14 text-gray-500 w-fit'>
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
            }        

            {/* { variant === "default" && 
                
            } */}

            <div className='w-fit flex flex-wrap items-center gap-4'>
                {/* Action items - icons */}
                { variant === "default" &&
                    <div className='flex gap-10'>
                        <div className='w-fit flex justify-center'>
                            {/* Search Bar */}
                            <div className='border rounded flex overflow-hidden'>
                                <div className='flex items-center justify-center px-4 order-1 bg-gray-100'>
                                    <IoSearchOutline />
                                    <input type="text" name="" id="" className='px-4 py-2 outline-none bg-transparent' placeholder='Search' />
                                </div>
                            </div>
                        </div>
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
                }
                { variant === "auth" &&
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink
                                to={"/v1/login"}
                                className={({isActive}) => isActive ? 'text-white font-semibold border border-black rounded-md py-2 px-5 bg-black' : 'hover:text-black border border-transparent hover:border-black rounded-md px-5 py-2'}
                            >Login</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/v1/signup"}
                                className={({isActive}) => isActive ? 'text-white font-semibold border border-black rounded-md py-2 px-5 bg-black' : 'hover:text-black border border-transparent hover:border-black rounded-md px-5 py-2'}
                            >Signup</NavLink>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default NavigationBar