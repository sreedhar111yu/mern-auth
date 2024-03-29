import React, { useState } from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import { signInStart } from '../redux/user/userSlice';
import { signInSuccess } from '../redux/user/userSlice';
import { signInFailure } from '../redux/user/userSlice';
import {  useDispatch, useSelector } from 'react-redux';
import OAuth  from '../Components/OAuth';


function Signin() {
  const [formData, setFormData]=useState({});
  const {loading, error}= useSelector((state)=> state.user);
  const navigate = useNavigate();
  const dispach =useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = async (e)=> {
    e.preventDefault(); //not reload the page
    try {
      dispach(signInStart());
      const res =await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formData),
      });
      const data =await res.json();
      if(data.success===false){
        dispach(signInFailure(data));
        return;
      }
      dispach(signInSuccess(data));
      navigate('/')
    } catch (error) {
      dispach(signInFailure(error));
      return;
    }
    
    

  };
  
  return (
    <>
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

      <input type="email" placeholder='Email'
      id='email' className='bg-slate-100 p-3 rounded-lg' 
      onChange={handleChange}/>

      <input type="password" placeholder='Password'
      id='password' className='bg-slate-100 p-3 rounded-lg' 
      onChange={handleChange}/>

      <button disabled={loading} className='bg-slate-700 text-white p-2 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        {loading ? 'Loading...':'Sign In'}</button>
        <OAuth />

    </form>
    <div className='flex gap-2 mt-5'>
      <p> Dont have an account? </p>
      <Link to='/signup'> 
      <span className='text-blue-500'>sign up</span>
      </Link>
      
    </div>
    <p className='text-red-700 mt-5'>{error && "Something went worng"}</p>
    </div>
    
    </>
  )
}

export default Signin