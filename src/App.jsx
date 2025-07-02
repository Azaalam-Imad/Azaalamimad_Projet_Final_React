import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homes from './Pages/Homes'
import Navbar from './components/Navbar'
import Shop from './Pages/Shop'
import ProductDetailPage from './Pages/ProductDetailPage'

import Footer from './components/Footer'
import { MyProvider } from './context/Context'
import About from './Pages/About'
import Acount from './Pages/Acount'
import CreateAccount from './Pages/CreateAccount'
import Contact from './Pages/Contact'
import Carts from './Pages/Carts'
import Blog from './Pages/Blog'

function App() {
  

  return (
    <>
    <MyProvider>


      <Navbar />
    <Routes>
      <Route path="/" element={<Homes />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/ProductDetailPage/:id" element={<ProductDetailPage />} />
      <Route path="/About" element={<About />} />
      <Route path="/Acount" element={<Acount />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Carts" element={<Carts />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    <Footer />
    </MyProvider>
    
    </>
  )
}
export default App
