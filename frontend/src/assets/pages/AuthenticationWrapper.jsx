import React from 'react'
import NavigationBar from '../components/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'
import BackgroundImg from '../images/shopping-4.jpg'
import { useSelector } from 'react-redux'
import Spinner from '../components/Spinner/Spinner'

const AuthenticationWrapper = () => {
    const isLoading = useSelector((state) => state?.commonState?.loading);

    return (
        <div className='h-[90vh]'>
            <NavigationBar variant="auth" />
            {/* <div className='flex'>
                <div className='max-h-[91vh] w-[60%] lg:w-[70%] hidden md:inline py-2'>
                    <img src={BackgroundImg} alt="shopping_img" className='object-cover w-full h-full' />
                </div>
                <div>
                    <Outlet />
                </div>
            </div> */}
            <div className='flex items-center justify-center w-full h-full'>
                <Outlet />
            </div>
            {isLoading && <Spinner />}
        </div>
    )
}

export default AuthenticationWrapper