import axios from 'axios';
import React, { useState } from 'react'
import { useAuth } from './AuthProvider';

export default function AddBook() {
  const [book_id,setId]=useState("");
  const [name,setName]=useState("");
  const [genre,setGenre]=useState("");
  const [availability,setTot]=useState();
  const [price,setPrice]=useState("")
  const auth=useAuth();
  async function handleSubmit(e){
    e.preventDefault();
    if(book_id && name && availability && genre  && price){
      await axios.post('/admins/addBook',{book_id:book_id,name:name,genre:genre,availability:availability,price:price},{headers:{Authorization:`Bearer ${auth.token}`}})
      alert("Book added successfully");
      setId("");
      setGenre("");
      setName("");
      setTot("");
      setPrice("");
    }
    else{
      alert("All fields are mandatory");
    }
  }
  return (
    <div>
      <form className='form'>
      <div className='topic'> ADD BOOK</div>
        <div className='label'>
        <label>BOOK ID</label>
        <input type="text" placeholder='Enter an book Id' value={book_id} onChange={(e)=>setId(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Name of the book</label>
        <input type='text' placeholder='Enter book name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Genre</label>
        <input type='text' placeholder='Enter a genre' value={genre} onChange={(e)=>setGenre(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Availability</label>
        <input type='number' placeholder='Enter an availability of the books' value={availability} onChange={(e)=>setTot(e.target.value)}/>
        </div>
        <div className='label'>
        <label>Price</label>
        <input type='text' placeholder='Enter price ' value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <button className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}
