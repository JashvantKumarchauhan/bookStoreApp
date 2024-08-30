import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

import Signup from './components/Signup';
import Course from './components/Course';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Authprovider';

export default function App() {
  const [authUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/course' 
            element={authUser ? <Course /> : <Navigate to="/signup" />} 
          />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
