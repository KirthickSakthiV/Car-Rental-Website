import React from 'react'
import { useAuth } from './Auth'
import { Navigate } from 'react-router-dom'

export const Producted = (children) => {
    const auth=useAuth()
    if(!auth.user){
        return <Navigate to='/login'/>
    }
  return (
    <div>
    {children}
</div>  )
}
