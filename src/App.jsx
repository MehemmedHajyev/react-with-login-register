import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import SignIn from './components/SignIn'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App