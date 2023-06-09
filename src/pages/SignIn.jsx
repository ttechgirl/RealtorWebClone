import React, { useState } from 'react'
import{FaEyeSlash,FaEye} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function SignIn() {
  const [showPassword,setShowPassword] = useState(false);
  const [formData,setFormData] =useState({
    email:"",
    password:"",
  });
  const {email,password} =formData;
  function onChange(event){
    //console.log(event.target.value);
    setFormData((prevState)=>({
      ...prevState,[event.target.id]:event.target.value,
    }))
  }
  const navigate = useNavigate();
  async function onSubmit(e){
    //prevents the page from refreshing
    e.preventDefault();
    try {
      const auth = getAuth();
      //promise
      const userCredentials = await signInWithEmailAndPassword(auth,email,password)
      //checks if the user credential is true and exist
      if(userCredentials.user){
        navigate('/');
      }
    } catch (error) {
      toast.error('Invalid login details');
    }
  }
  return (
    <section>
    <h1  className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'> 
            <img src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'  alt="key" className='w-full rounded-2xl'/>
        </div>
        <div className='w-fill md:w-[67%] lg:w-[40%] lg:ml-20 mb-6  '>
            <form onSubmit={onSubmit}>
                <input type='email' id='email' placeholder='Email address' value={email} onChange={onChange} className='w-full px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded-sm transition ease-in-out mb-3' >
                </input>
                <div className='relative mb-4'>
                <input  type={showPassword? 'text':'password'}  id='password' placeholder='Password' value={password} onChange={onChange} className='w-full px-4 py-2 text-xl text-gray-600 bg-white border-gray-300 rounded-sm transition ease-in-out' >
                </input>
                {showPassword?(<FaEyeSlash className='absolute right-3 top-3 text-lg cursor-pointer ' onClick={()=>setShowPassword((prevState)=> !prevState)}/>)
                 : (<FaEye className='absolute right-3 top-3 text-lg cursor-pointer' onClick={()=>setShowPassword((prevState)=> !prevState)}/>
                )}
                </div>
                <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-4'> 
                  <p>
                    Don't have an account? <Link to='/sign-up' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out '>Register</Link>
                  </p>
                  <p className='ml-2 text-red-600 hover:text-red-800 transition duration-200 ease-in-out'>
                    <Link to='/forgot-password'>Forgot password?</Link>
                  </p>
                </div>
                <button className='w-full bg-blue-600 text-white py-2 px-4 text-xs font-medium uppercase rounded-sm shadow-md hover:bg-blue-700 transition duration-100 ease-in-out hover:shadow-lg active:bg-blue-900 mb-1' type='submit'>Sign in</button>
               <div className='flex items-center my-3 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center text-sm font-medium'>OR</p>
               </div>
               <OAuth></OAuth>
            </form>
        </div>
    </div>
    </section>
  )
}

  