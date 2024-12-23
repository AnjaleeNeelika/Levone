import React from 'react'
import NavigationBar from '../components/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import { useSelector } from 'react-redux'

const Wrapper = () => {
    const isLoading = useSelector((state) => state?.commonState?.loading);

    return (
        <div>
            <NavigationBar />
            <Outlet />
            {isLoading && <Spinner />}
        </div>
    )
}

export default Wrapper