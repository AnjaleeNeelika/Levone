import React, { useCallback, useState } from 'react'
import BackgroundImg from '../../images/shopping-6.jpg'
import GoogleSignIn from '../../components/Buttons/GoogleSignIn'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../store/features/common'
import { loginAPI } from '../../../api/authentication'
import { saveToken } from '../../utils/jwt-helper'

const Login = () => {
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

        loginAPI(values).then(res => {
            if (res?.token) {
                saveToken(res?.token);
                navigate('/');
            } else {
                setError("Something went wrong!");
            }
        }).catch(err =>{
            // Need to check response status
            setError("Invalid Credentials!");
        }).finally(() => {
            dispatch(setLoading(false));
        });
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
                <div className='w-full max-w-[320px] lg:w-[320px] py-4 px-6 mx-auto'>
                    <p className='w-fit font-bold text-3xl mb-5'>Sign In</p>
                    <GoogleSignIn />
                    <p className='text-gray-500 items-center text-center w-full py-5'>OR</p>

                    <div>
                        <form onSubmit={onSubmit}>
                            <input type="email" name='userName' value={values?.userName} onChange={handleOnChange} placeholder='Email Address' className='w-full py-2 px-4 border border-gray-400 rounded-md text-gray-600 hover:border-black' required autoComplete />
                            <input type="password" name='password' value={values?.password} onChange={handleOnChange} placeholder='Password' className='w-full py-2 px-4 mt-5 border border-gray-400 rounded-md text-gray-600 hover:border-black' required autoComplete='new-password' />
                            <Link className='text-right w-full float-right underline pt-2 text-sm text-gray-500 hover:text-black'>Forgot Password?</Link>
                            <button className='border w-full rounded-lg p-3 bg-black text-white shadow-lg mt-10 hover:opacity-80 hover:-translate-y-1 transition-transform duration-200'>Sign In</button>
                        </form>
                    </div>
                    {error && <p className='text-lg text-red-700'>{error}</p>}
                    <div className='mt-2'>
                        <Link 
                            to={'/v1/signup'}
                            className='mt-5 text-sm text-gray-500 underline hover:text-black'>Don't have an account? Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login