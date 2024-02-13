import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from './AuthProvider';

export default function UpdateBook() {
  const [book_id,setId]=useState("");
  const [name,setName]=useState("");
  const [availability,setTot]=useState();
  const [price,setPrice]=useState();
  const auth=useAuth(); 

  async function handleSubmit(e){
    e.preventDefault();
    if(book_id && (name || availability || price)){
      await axios.put('/admins/updateBook',{book_id:book_id,name:name,availability:availability,price:price},{headers:{Authorization:`Bearer ${auth.token}`}})
      alert("Book updated successfully");
      setId("");
      setName("");
      setTot("");
      setPrice("");
    }
    else{
      alert("Enter a detail to be update");
    }
  }
  return (
    <div>
      <form className='form'>
      <div className='topic'> UPDATE BOOK</div>
        <div className='label'>
        <label>BOOK ID</label>
        <input type="text" placeholder='Enter a book Id' value={book_id} onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Name of the book</label>
        <input type='text' placeholder='Enter a name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Availability</label>
        <input type='number' placeholder='Enter a availability' value={availability} onChange={(e)=>setTot(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Price</label>
        <input type='text' placeholder='Enter price ' value={price } onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <button className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}
