import axios from 'axios'
import React, {  useState } from 'react'
import { useAuth } from './AuthProvider'
import Cart from './Cart';

export default function Orders() {
  const [order,setOrder]=useState([{}]);
  const [info,setInfo]=useState(0);
  const auth=useAuth();
  if(!info){
    async function fun(){
    await axios.get(`/users/orders/${auth.user}`,{'headers': { 'Authorization': `Bearer ${auth.token}`,'Content-Type': 'application/json',}}).then(res=>{
      setOrder(res.data)
      res.data.length>1?setInfo(1):setInfo(2);
    }).catch(e=>alert(e));
  }
  fun()
  }
  return (
    <div> 
      {(info===1 && <Cart orders={order}/>)}
      {(info===2 && <div>No orders</div>)}
      {(!info && <div>Loading..</div>)}
    </div>
  )
}
