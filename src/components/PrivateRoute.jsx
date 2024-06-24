import React, { useContext, useEffect } from 'react'
import  {AuthContext}  from './auth/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>   
    }
    else if (user) {
        return children
    }  
    //useEffect(()=>{},[navigate('/login')])
    // return navigate('/login') 
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

export default PrivateRoute
