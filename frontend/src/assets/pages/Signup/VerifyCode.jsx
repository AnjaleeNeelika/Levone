import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoading } from '../../store/features/common';
import { verifyAPI } from '../../../api/authentication';

const VerifyCode = ({ email }) => {
    const [values, setValues] = useState({
        userName: email,
        code: ''
    });

    const[error, setError] = useState('');    
    const dispatch = useDispatch();
    const [enableVerify, setEnableVerify] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        
        setError('');
        dispatch(setLoading(true));

        verifyAPI(values).then(res => {
            setMessage('Thank you! Your email has been successfully verified. You can log into your account.')
        }).catch(err => {
            setError('The verification code you entered is incorrect or has expired.')
        }).finally(() => {
            dispatch(setLoading(false));
        })
    }, [dispatch, values]);

    const handleOnChange = useCallback((e) => {
        // e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target?.value,
        }))
    }, []);

    return (
        <div>
            {!message && 
                <>
                    <p className='text-lg text-blue-900'>Regitration was successful! Please check your email for the verification code to complete your registration.</p>
                    <p className='text-lg text-gray-600 pt-4 font-bold'>Please enter the 6-digit verification code</p>

                    <form action="" onSubmit={onSubmit} className='flex flex-col gap-4 mt-10'>
                        <input type="text" name="code" id="" value={values?.code} maxLength={6} onChange={handleOnChange} placeholder='6 digit code' className='h-[48px] border rounded border-gray-600 p-2 mt-4' required />
                        <button type='submit' className='border w-full rounded-lg p-3 bg-black text-white shadow-lg mt-5 hover:opacity-80 hover:-translate-y-1 transition-transform duration-200'>Verify</button>
                    </form>
                
                    {error && <p className='text-red-700'>{error}</p>}
                </>
            }
            {message && <p className='text-lg'>{message}</p>}
        </div>
    )
}

export default VerifyCode