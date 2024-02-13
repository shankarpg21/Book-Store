import React from 'react'
import './type.css';
import { useNavigate } from 'react-router-dom';
const Type = () => {
    const navigate=useNavigate();
  return (
    <div>
      <div className='title'>BOOK STORE</div>
    <div className='container'>
      <button className='child1' onClick={()=>navigate("/users")}>User</button>
      <button className='child2' onClick={()=>navigate("/admins")}>Admin</button>
    </div>
    </div>
  )
}

export default Type
