import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import  app from './firebase.config'
import PropTypes from 'prop-types'
export const AuthContext = createContext({}) 

function AuthProvider({children}) {

    const [user, setUser]           = useState(null);
    const [loading, setLoading]     = useState(true)
    const [data, setData]           = useState(null)
    const auth = getAuth(app)

//...auth functions
    const createUser = (email, password)=>{
        //...set loading to true and return promise
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
            setLoading(true)    
             }).catch((error)=>{
                console.log(error.message) 
             });
        }//end logOut
       
    const profileUpdate = (displayName,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:displayName, photoURL:photoUrl
        })
    }//end profile update
    //...keep track of lodeded user
    useEffect(()=>{
        const unsubsribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false)
            }) 
        return ()=>{unsubsribe()}
    },[auth])

    const authInfo ={
        user,
        loading,
        data,
        createUser,
        setUser,
        userLogIn,
        externalLogin,
        logOut,
        profileUpdate,
        setData
    }
    return (
        <AuthContext.Provider value ={authInfo} >
             {children}
        </AuthContext.Provider> 
    )
}
AuthProvider.protoTypes ={
    children:PropTypes.object
}
export default AuthProvider
