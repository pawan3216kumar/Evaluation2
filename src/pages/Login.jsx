import React from 'react'
import { Input, Button, Stack, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AllContextProvider'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const[email , setEmail] = useState("")
    const[password , setPassword] = useState("")

    const{login , authDetails : {isLoggedIn}} = useContext(AuthContext)

   async  function handleClick(){
    try {
        
        let res = await axios({
            method : "post",
            url : "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
            data : {
                email , 
                password
            }
    
        })

       login(res.data.token)


    } catch (error) {
        console.log(error)   
    }
    }
    if(isLoggedIn){
        return <Navigate to = "/"/>
    }


    return (
        <Stack align="center" >
            <Heading fontSize={40}>Login Now</Heading>
            <Input
                h="30px"
                w="400px"
                placeholder='Email'
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />

            <Input
                h="30px"
                w="400px"
                placeholder='Password'
                type="password"
                value = {password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <Button w="200px"  h="30px" onClick = {handleClick}>Submit</Button>

        </Stack>
    )
}

export default Login
