import React, {  useState } from 'react'
import  { useAuth } from './AuthProvider'
import './login.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({type}) => {
    const [user,setUser]=useState(""); 
    const auth=useAuth();
    const navigate=useNavigate();
    const [password,setPassword]=useState("");
    const info=()=>{
      axios.post(`/${type}/login`,{userName:user,password:password}).then(res=>{
        auth.verify(res.data);
        alert("Login Successful")
        auth.login(user);
        navigate(`/${type}/profile`);
      }).catch(e=>{
        alert(`Invalid credentials`)
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
    function handleRegister(){
      auth.register();
      if(auth.chk) navigate('/users/register')
    }
  return (
    <div>
      <form className='form'>
        <div className='topic'> LOGIN FORM</div>
        <div className='label'>
        <label>UserName</label>
        <input type="text" placeholder='Enter an email Id' onChange={(e)=>setUser(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Password</label>
        <input type='text' placeholder='Enter a password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className='label'>
        { type==="users" && <div><div>Don't have an account?</div>
        <Link onClick={handleRegister}>Click here to register</Link></div>}
        <Outlet/>
        </div>
        
        <button className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Login
