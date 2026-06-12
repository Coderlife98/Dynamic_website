import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Pages/Index'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
         <Routes>
              <Route path='/' element={<Index/>} />
         </Routes>
         <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App