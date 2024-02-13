import React, { useContext, useState } from 'react'
import Books from './Books'
import './Book.css'
import {bookContext} from './BookProvider';
import axios from 'axios';
import { useAuth } from './AuthProvider';

export default function GetBooks({type}) {
  const [load,setLoad]=useState(false)
  const auth=useAuth();
  const {books,setBooks}=useContext(bookContext);
  if(!load){
    async function fun(){
      await axios.get(`/${type}/getBook`,{headers: { Authorization: `Bearer ${auth.token}` }}).then(res=>{
        setBooks(res.data);
      setLoad(true)
    }).catch(e=>alert(e))
  }
  fun();
  }

  return (
    <div>
      {!books && <p>Sorry,No Books available</p>}
      {books && load &&<Books books={books} type={type}/>}
      {!load && <p>Loading..</p>}
    </div>
  )
}
