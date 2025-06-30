import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homes from './Pages/Homes'
// import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Homes />} />
    </Routes>
    </>
  )
}
export default App
