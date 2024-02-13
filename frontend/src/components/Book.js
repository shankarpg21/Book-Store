import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider';

export default function Book({type,book}) {
    const navigate=useNavigate();
    const handleBuy=()=>{
        navigate(`/users/buyBook/:${book.book_id}`)
    }
    const handleUpdate=()=>{
      navigate(`/admins/updateBook`)
    }
    const auth=useAuth();
    const handleDelete=()=>{
      axios.delete(`/admins/deleteBook/${book.book_id}`,{headers: { 'Authorization': `Bearer ${auth.token}`,'Content-Type': 'application/json',}}).then(res=>{
        alert("Book Deleted succesfully")
        navigate(`/admins/addBook`)
      }).catch(e=>alert(e));
    }
  return (
    <div className='box'>
      <label className='info'>Book Id:{book.book_id}</label>
      <label className='info'>Book Name:{book.name}</label>
      <label className='info'>Genre of Book:{book.genre}</label>
      <label className='info'>Availability:{book.availability}</label>
      <label className='info'>Price:{book.price}</label>
      {type==='users' && <button className='buy' onClick={handleBuy}>Buy</button>}
      {type==='admin' && <button className='buy' onClick={handleUpdate}>Update</button>}
      {type==='admin' && <button className='buy' onClick={handleDelete}>Delete</button>}
    </div>
  )
}
