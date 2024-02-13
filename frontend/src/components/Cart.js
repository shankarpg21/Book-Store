import React from 'react'
import Items from './Items'

export default function Cart({orders}) {
  return (
    <div className='book'>
      {orders.map((info)=>{
        return <Items key={info._id} order={info}/>
      })}
    </div>
  )
}
