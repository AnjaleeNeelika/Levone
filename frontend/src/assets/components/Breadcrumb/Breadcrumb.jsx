import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ links }) => {
    return (
        <nav className='flex' aria-label='Breadcrumb'>
            <ol className='inlin-fle ic space-x-1 md:space-x-2 rtl:space-x-reverse'>
                {links?.map((link, index) => (
                    <li key={index} className='inline-flex items-center text-lg font-medium text-gray-500'>
                        <Link to={link?.path} className='inline-flex items-center mr-2'>
                            {link?.title}
                        </Link>
                        {(links?.length - 1) !== index && 
                            <IoIosArrowForward />
                        }
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb