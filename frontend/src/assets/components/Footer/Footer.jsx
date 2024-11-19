import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { RiInstagramFill, RiTiktokFill, RiTwitterXFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import Logo from '../../logo/transparent_bg.png'

const Footer = ({content}) => {
    return (
        <div className='bg-black w-full text-white py-16 px-20'>
            <div className='flex justify-between gap-10'>
                {content?.items && content?.items?.map((item, index) => {
                    return (
                        <div className='flex flex-col' key={index}>
                            <p className='text-2xl pb-6'>{item?.title}</p>
                            {item?.list && item?.list?.map((listItem, index) => 
                                <NavLink 
                                    key={index} 
                                    href={listItem?.path} 
                                    className='w-fit flex flex-col my-1 hover:border-b-2 hover:border-b-white'
                                >
                                    {listItem?.label}
                                </NavLink>
                            )}
                            {item?.description && <p>{item?.description}</p>}
                        </div>
                    )
                })}
            </div>
            <div className='flex gap-6 text-3xl my-10 items-center justify-center'>
                <a href="/fb-levone" className=''>
                    <FaFacebookSquare />
                </a>
                <a href="/insta-levone">
                    <RiInstagramFill />
                </a>
                <a href="/yt-levone">
                    <IoLogoYoutube />
                </a>
                <a href="/x-levone">
                    <RiTwitterXFill />
                </a>
                <a href="/tiktok-levone">
                    <RiTiktokFill />
                </a>
            </div>
            <div className='w-fit mx-auto mb-3'>
                <img src={Logo} className='h-14' />
            </div>
            <p className='text-sm text-white text-center content-center'>
                {content?.copyright}
            </p>
        </div>
    )
}

export default Footer