import React from 'react'
import './func.css'
import { Outlet, useNavigate } from 'react-router-dom'
import RequireAuth from './RequireAuth'
import { useAuth } from './AuthProvider'

const Users = ({type}) => {
  const auth=useAuth()
    const navigate=useNavigate()
  return (
    <div>
        <header>Welcome to our Book store </header>
        <div className='container'>
          
        {!auth.user && <button className='child' onClick={()=>{
          auth.register();
          navigate("login")}}>{type} Login</button>}
        {type==="User" && !auth.user && <button className='child' onClick={()=>{
          auth.register();
          navigate("register")}
        }>User Registration</button>}
        <button className='child' onClick={()=>navigate("getBook")}>View Books</button>
        <button className='child' onClick={()=>navigate("orders")}>Your Orders</button>
        <RequireAuth>
          <button className='child' onClick={()=>navigate("profile")}>Profile</button>
        </RequireAuth>
        </div>  
        <Outlet/>
    </div>
  )
}

export default Users
