import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header.jsx'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ChakraProvider>
      <Header />
      <App  />
      <Footer />
    </ChakraProvider>

  </React.StrictMode>,
)














