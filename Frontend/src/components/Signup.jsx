import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

export default function Signup() {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div id="my_modal_3 "className='w-[600px]'>
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      
      <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>

    <div className='mt-4 space-y-2 '>
      <span className=''>Name</span>
      <br/>
      <input {...register("name", { required: true })}
      type="text"placeholder='Enter your name' className='w-80 border outline-none rounded'/>
     <br/> {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>


    <div className='mt-4 space-y-2 '>
      <span className=''>Email</span>
      <br/>
      <input {...register("email", { required: true })}
       type="email"placeholder='Enter your email' className='w-80 border outline-none rounded'/>
       <br/>{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
  


  <div className='mt-4 space-y-2 '>
      <span className=''>Password</span>
      <br/>
      <input {...register("password", { required: true })}
      type="text"placeholder='Enter your password' className='w-80 border outline-none rounded'/>
     <br/> {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
     <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Signup</button>
    <p className='text-xl'>Have account? <button  className='underline text-blue-500 cursor-pointer'
    onClick={()=>{
      document.getElementById("my_modal_3").showModal()
    }}
    >Login</button>
    <Login/></p>
  </div>
  </form>
  </div>
</div>
    </div>
      
      </>
  )
}
