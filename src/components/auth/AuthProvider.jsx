/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { app } from './firebase.config'
import { useLoaderData, useNavigate } from 'react-router-dom';

const AuthContext = createContext({}) 
function AuthProvider({children}) {

    const [user, setUser]           = useState(null);
    const [loading, setLoading]     = useState(true)
    const [jsonData, setJsonData]   =  useState(null)

    const auth = getAuth(app)
    

    const createUser = (email, password,name='Not Set', photoUrl='Not Set')=>{
        //return promise
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)    
    }
    const userLogIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const externalLogin= (provider)=>{
        return signInWithPopup(auth, provider)
    }
    const logOut = ()=>{
            signOut(auth).then(()=>{
                //redirect to login page
            setLoading(true)
             }).catch((error)=>{
                 
             });
        }
       
    const profileUpdate = (displayName,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:displayName, photoURL:photoUrl
        })
    }

    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                //console.log(currentUser)
                setLoading(false)
            }) 
        return ()=>{unsubsribe()}
    },[auth])
    
    const authInfo ={
        user,
        loading,
        jsonData,
        createUser,
        setUser,
        userLogIn,
        externalLogin,
        logOut,
        profileUpdate,
        setJsonData
    }
    return (
        <AuthContext.Provider value ={authInfo} >
             {children}
        </AuthContext.Provider> 
    )
}

export default AuthProvider
