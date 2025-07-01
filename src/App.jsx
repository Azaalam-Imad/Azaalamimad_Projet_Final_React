import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homes from './Pages/Homes'
import Navbar from './components/Navbar'
import Shop from './Pages/Shop'
import ProductDetailPage from './Pages/Detais'

import Footer from './components/Footer'

function App() {
  

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/ProductDetailPage/:id" element={<ProductDetailPage />} />
    </Routes>
    <Footer />
    </>
  )
}
export default App
