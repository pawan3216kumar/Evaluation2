import { useContext } from "react";
import { AuthContext } from "../context/AllContextProvider";
import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const{authDetails} = useContext(AuthContext)
    

    if(!authDetails.isLoggedIn){
       return <Navigate to = "/login"/>
    }
  return children
}

export default PrivateRouter
