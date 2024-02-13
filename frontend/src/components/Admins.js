import React from 'react'
import './func.css'
import { Outlet, useNavigate } from 'react-router-dom'
import RequireAdminAuth from './RequireAdminAuth'
import { useAuth } from './AuthProvider'


const Admins = ({type}) => {
    const navigate=useNavigate()
    const auth=useAuth();
  return (
    <div>
        <header>Welcome Admin </header>
        <div className='container'>
          
        { !auth.user && <button className='child' onClick={()=>{
          navigate("login")}}>{type} Login</button>}
        
        <button className='child' onClick={()=>navigate("addBook")}>Add Books</button>
        <button className='child' onClick={()=>navigate("getBook")}>View Books</button>
        <RequireAdminAuth>
          <button className='child' onClick={()=>navigate("profile")}>Profile</button>
        </RequireAdminAuth>
        </div>  
        <Outlet/>
    </div>
  )
}

export default Admins
