import React from 'react'
import NavigationBar from '../components/Navigation/NavigationBar'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'

const Wrapper = () => {
  return (
    <div>
        <NavigationBar />
        <Outlet />
        <Spinner />
    </div>
  )
}

export default Wrapper