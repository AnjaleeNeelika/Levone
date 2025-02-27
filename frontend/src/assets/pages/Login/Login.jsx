import React from 'react'
import BackgroundImg from '../../images/shopping-6.jpg'

const Login = () => {
    return (
        <div className='w-full h-full max-h-[80vh] flex max-w-[70%] mx-auto rounded-xl shadow-xl border mt-5'>
            {/* <div className='w-[60%] lg:w-[70%] hidden md:inline rounded-xl shadow-lg'> */}
                <img src={BackgroundImg} alt="shopping_img" className='w-[60%] lg:w-[70%] hidden md:inline rounded-xl object-cover' />
            {/* </div> */}
            <div className='flex md:w-[40%] w-full justify-center items-center'>
                <div className='w-[320px] py-4 px-6 mx-auto'>
                    <p className='w-fit mx-auto'>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default Login