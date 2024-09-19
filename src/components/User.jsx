import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}=useParams()
  return (
    <div>
      <h1 className='text-center m-10 font-bold text-red-600 text-4xl'>User : {id}</h1>
    </div>
  )
}

export default User
