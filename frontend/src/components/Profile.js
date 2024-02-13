import React from 'react'
import { useAuth } from './AuthProvider'
import './login.css'
import { Outlet } from 'react-router-dom';
const Profile = () => {
    const auth=useAuth();
  return (
    <div>
      <div className='pro'>Welcome {auth.user}</div>
      <div className='ord'>
      <button className='btn' onClick={()=>auth.logout()}>Log out</button>
      <Outlet/>
      </div>
    </div>
  )
}

export default Profile
