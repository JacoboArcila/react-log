import React from 'react'
import Header from '../header/Header'
import { useLocation } from 'react-router-dom'

const Layout = ({children}) => {
    const location = useLocation()
    const componentToHide = location.pathname.includes('/register');
    return (
    <div>
        {!componentToHide ? <Header /> : null}
        {children}
    </div>
  )
}

export default Layout