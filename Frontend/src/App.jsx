import React from 'react'
import Home from './home/Home'

import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'



export default function App() {
  return (
    <>
   {/* <Home/>
    <Course/>*/}

<div className='dark:bg-slate-900 dark:text-white'>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     
    </Routes>
    </div>

   
  
    </>
    )
}
