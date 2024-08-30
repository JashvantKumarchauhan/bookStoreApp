import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

export default function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"; // Fixed the variable name from `form` to `from`
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.name,  // Matching 'name' here with what is used in register
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(res.data)); // Storing user data in localStorage
        navigate(from, { replace: true }); // Use `navigate` instead of `Navigate`
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div id="my_modal_3" className='w-[600px]'>
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
              <h3 className="font-bold text-lg">Signup</h3>

              <div className='mt-4 space-y-2'>
                <label>Name</label>
                <input {...register("name", { required: true })}
                  type="text" placeholder='Enter your name' className='w-80 border outline-none rounded'/>
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <label>Email</label>
                <input {...register("email", { required: true })}
                  type="email" placeholder='Enter your email' className='w-80 border outline-none rounded'/>
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='mt-4 space-y-2'>
                <label>Password</label>
                <input {...register("password", { required: true })}
                  type="password" placeholder='Enter your password' className='w-80 border outline-none rounded'/>
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                <p className='text-xl'>
                  Have an account? <Link to='/' className='underline text-blue-500 cursor-pointer'>Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
