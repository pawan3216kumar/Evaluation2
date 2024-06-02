import React from 'react'
import {Link} from 'react-router-dom'
import {Flex , Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AllContextProvider'

const links = [
    {
        to : "/",
        label : "HOME",
    },
    {
        to : "/product",
        label : "PRODUCT",
    },
    {
        to : "/login",
        label : "LOGIN",
    }
]

const Navbar = () => {
    const{logout} = useContext(AuthContext)
  return (
    <Flex justify="space-around" bg="lightblue" p={3}>
        {links.map((ele)=>(
            <Link key = {ele.to} to = {ele.to}>
                {ele.label}
            </Link>
        ))}

        <Button onClick = {logout}>LOGOUT</Button>
    </Flex>
  )
}

export default Navbar
