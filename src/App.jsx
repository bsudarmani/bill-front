// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
function App() 
{
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
