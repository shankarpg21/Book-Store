import React from 'react'
import Book from './Book'
export default function Books({books,type}) {
  return (
    <div className='book'>
      {books.map((info)=>{
        return <Book key={info._id} type={type} book={info}/>
      })} 
    </div>
  )
}
