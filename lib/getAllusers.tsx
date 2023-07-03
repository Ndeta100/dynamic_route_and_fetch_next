import { error } from 'console'
import React from 'react'

async function getAllusers() {
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) throw new Error('Failed to fetch new data')
  return (
    response.json()
  )
}



export default getAllusers
