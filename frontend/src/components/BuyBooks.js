import React, { useState } from 'react'
import './Buy.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthProvider';

const BuyBooks = () => {
  const params=useParams();
  const id=params.bookId;
  const bookId=id.slice(1);
  const [buy,setBuy]=useState(true)
  const auth=useAuth();
  function handlePay(){
    if(buy)
    {
      axios.put(`/users/buyBook/${bookId}`,{user_id:auth.user},{headers: { 'Authorization': `Bearer ${auth.token}`,'Content-Type': 'application/json',}}).then(res=>{
        setBuy(false)
      }).catch(e=>alert(e));
    }
  }

  return (
    <div>
      {buy &&
    <div className='pay'>
      <button className='opt' onClick={handlePay}>UPI</button>
      <button className='opt' onClick={handlePay}>Debit Card</button>
      <button className='opt' onClick={handlePay}>Credit Card</button>
      <button className='opt' onClick={handlePay}>Cash On Delivery</button>
      
   </div>}
   {
    !buy && <p>Payment Successful,Book will be delivered next 7-15 days </p>
   }
   </div>
   )
}

export default BuyBooks
