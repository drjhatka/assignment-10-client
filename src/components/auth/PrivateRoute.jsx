import React, { useContext, useEffect } from 'react'
import { AuthContext } from './components/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    if (loading) {
        console.log(loading)
        return <span className="loading loading-bars loading-lg"></span>
            
    }
    if (user) {
        return children
    }  
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute
