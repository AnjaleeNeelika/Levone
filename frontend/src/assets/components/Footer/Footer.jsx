import React from 'react'
import { FaFacebookSquare, FaTiktok } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io'
import { PiTiktokLogoThin } from 'react-icons/pi'
import { RiInstagramFill, RiTiktokFill, RiTwitterFill, RiTwitterXFill } from 'react-icons/ri'

const Footer = ({content}) => {
    return (
        <div className='bg-black w-full text-white py-16 px-20'>
            <div className='flex justify-between gap-10'>
                {content?.items && content?.items?.map((item, index) => {
                    return (
                        <div className='flex flex-col'>
                            <p className='text-2xl pb-6'>{item?.title}</p>
                            {item?.list && item?.list?.map((listItem, index) => 
                                <a href={listItem?.path} className='flex flex-col py-1'>
                                    {listItem?.label}
                                </a>
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
            <p className='text-sm text-white text-center content-center'>
                {content?.copyright}
            </p>
        </div>
    )
}

export default Footer