import React from 'react'
import {BiLoader, BiLoaderCircle} from 'react-icons/bi'
import { CgLoadbar } from 'react-icons/cg'
import { FiLoader } from 'react-icons/fi'
import { LuLoader, LuLoader2 } from 'react-icons/lu'

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-white opacity-75'>
            <div className='spinner-border animate-spin inline-block rounded-full'>
                <span className='visually-hidden'>
                    <LuLoader2 className='text-5xl text-gray-500' />
                    <span className='sr-only'>Loading...</span>
                </span>
            </div>
        </div>
    )
}

export default Spinner