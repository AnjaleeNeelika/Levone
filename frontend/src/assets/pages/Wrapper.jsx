import React from 'react'
import NavigationBar from '../components/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'

const Wrapper = () => {
  return (
    <div>
        <NavigationBar />
        <Outlet />
    </div>
  )
}

export default Wrapper