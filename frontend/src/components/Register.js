import React, { useState } from 'react'
import  { useAuth } from './AuthProvider'
import './login.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user,setUser]=useState("");
    const auth=useAuth();
    const navigate=useNavigate();
    const [password,setPassword]=useState("");
    const info=()=>{
      axios.post('/users/register',{userName:user,password:password}).then(res=>{
        alert("Registration successful")
        navigate('/users/login');
      }).catch(e=>{
        alert(`User already exists`)
      })
    }
    function handleSubmit(e){
        e.preventDefault();
        if(user && password){
          info();
        }
        else{
          window.alert('All fields are mandatory');
        }
    }
    function handleLogin(){
      auth.register();
      if(!auth.chk) navigate('/users/login')
    }
  return (
    <div>
      <form className='form'>
      <div className='topic'>USER REGISTRATION FORM</div>
        <div className='label'>
        <label>UserName</label>
        <input type="text" placeholder='Enter an email Id' onChange={(e)=>setUser(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Password</label>
        <input type='text' placeholder='Enter a password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='label'>
        <div>Have an account?</div>
        <Link onClick={handleLogin}>Click here to login</Link>
        <Outlet/>
        </div>
        <button className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Register
