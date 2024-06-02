import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AllContextProvider from './context/AllContextProvider.jsx'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllContextProvider>
    <ChakraProvider>
        <BrowserRouter>
           <App />
        </BrowserRouter>,
    </ChakraProvider>
  </AllContextProvider>
)
