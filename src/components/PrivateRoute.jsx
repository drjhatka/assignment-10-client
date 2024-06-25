import React, { useContext, useEffect } from 'react'
import  {AuthContext}  from './auth/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span key={Math.random()*100} className="loading loading-bars loading-lg"></span>   
    }
    else if (user) {
        return children
    }  

    else{
        return <Navigate state={location.pathname} to="/login"></Navigate>

    }

}

export default PrivateRoute
