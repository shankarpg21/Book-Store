import React from 'react'

export default function Items({order}) {
  return (
      <div className='box'>
      <label className='info'>Book Id:{order.book_id}</label>
      <label className='info'>Name:{order.bookName}</label>
      <label className='info'>Price:{order.price}</label>
      </div>
  )
}
