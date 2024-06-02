import { Routes , Route} from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import PrivateRouter from './PrivateRouter'

const AllRoutes = () => {
  return (
    <Routes>
           <Route path = "/" element = {
           <PrivateRouter>
              <Home/>
           </PrivateRouter>
           
           }/>
           <Route path = "/login" element = {
           <Login/>
           }/>
           <Route path = "/product/:id" element = {
            <PrivateRouter>
                <Product/>      
            </PrivateRouter>
          }/>
    </Routes>
  )
}

export default AllRoutes


