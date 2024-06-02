import { createContext } from "react";
import { useState } from "react";
import React from 'react'

export const AuthContext = createContext()

const AllContextProvider = ({children}) => {
    const[authDetails , setAuthDetails] = useState({
        isLoggedIn : true,
        token : null
    }) 

const login = (token) =>{
    setAuthDetails({
        isLoggedIn : true,
        token : token
    })
}

const logout = () =>{
    setAuthDetails({
        isLoggedIn : false,
        token : null
    })
}

  return (
    <AuthContext.Provider value = {{authDetails , login , logout}}>
       {children}
    </AuthContext.Provider>
  )
}

export default AllContextProvider
