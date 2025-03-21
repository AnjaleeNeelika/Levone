import React, { useCallback } from 'react'
import GoogleIcon from '../../images/Google.png'
import { API_BASE_URL } from '../../../api/constant'

const GoogleSignIn = () => {
    const handleClick = useCallback(() => {
        window.location.href = API_BASE_URL + "/oauth2/authorization/google";
    }, []);

    return (
        <button onClick={handleClick} className='flex items-center justify-center border border-gray-600 px-4 py-2 w-full rounded-md hover:bg-slate-50'>
            <img src={GoogleIcon} alt='google-icon' className='w-5 h-5 rounded-full shadow-md' />
            <p className='px-2 text-gray-500'>Continue With Google</p>
        </button>
    )
}

export default GoogleSignIn