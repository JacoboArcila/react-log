import React from 'react'
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedRoutes = ({isLogged}) => {
   /*  if(isLogged) {
        return <Outlet />
    } else if {
        return <Navigate to="/signIn" />
    }
 */
  return (
    <div> 
        {isLogged ? <Outlet /> : <Navigate to="/signUp" />}
    </div>
  )
}

export default ProtectedRoutes