import React from 'react'
import NavigationBar from '../components/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'

const AuthenticationWrapper = () => {
    return (
        <div>
            <NavigationBar variant="auth" />
            <Outlet />
        </div>
    )
}

export default AuthenticationWrapper