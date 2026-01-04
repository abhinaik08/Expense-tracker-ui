import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import View from './pages/View'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Error from './pages/Error'
import { ToastContainer, toast } from 'react-toastify';

//import './App.css'

function App() {
  

  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<View/>}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
       { /*not found page*/ }
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
