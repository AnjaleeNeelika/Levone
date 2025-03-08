import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundImg from '../../images/shopping-6.jpg'

const ResetPassword = () => {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    });

    const[error, setError] = useState('');
    
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        
        setError('');
        dispatch(setLoading(true));

        
    }, [dispatch, values, navigate]);

    const handleOnChange = useCallback((e) => {
        // e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target?.value,
        }))
    }, []);

    return (
        <div className='w-full h-full max-h-[80vh] flex max-w-[70%] mx-auto rounded-xl shadow-xl border mt-5'>
            {/* <div className='w-[60%] lg:w-[70%] hidden md:inline rounded-xl shadow-lg'> */}
                <img src={BackgroundImg} alt="shopping_img" className='w-[50%] lg:w-[60%] hidden md:inline rounded-xl object-cover' />
            {/* </div> */}
            <div className='lg:w-[40%] w-full flex items-center justify-center'>
                <div className='w-full max-w-[360px] lg:w-[360px] py-4 px-6 mx-auto'>
                    <p className='w-fit font-bold text-3xl mb-2'>Reset Your Password</p>
                    <p className='text-sm text-gray-500 mb-10'>Enter your email and we'll send you a link to reset your password. Please check it.</p>

                    <div>
                        <form onSubmit={onSubmit}>
                            <label htmlFor="email" className='text-gray-600'>Email</label>
                            <input type="email" name='userName' value={values?.userName} onChange={handleOnChange} placeholder='Email Address' className='w-full py-2 px-4 border border-gray-400 rounded-md text-gray-600 hover:border-black mt-1' required autoComplete />
                            <button className='border w-fit rounded-lg py-2.5 px-14 bg-black text-white shadow-lg mt-10 hover:opacity-80 hover:-translate-y-1 transition-transform duration-200'>Send</button>
                        </form>
                    </div>
                    {error && <p className='text-red-700'>{error}</p>}
                    <span className='mt-2 text-gray-500 text-sm flex gap-1'>
                        Back to
                        <Link 
                            to={'/v1/login'}
                            className='underline hover:text-black'>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword