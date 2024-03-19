import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Signup.css'
export const Signup = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handlesignup=()=>{
        axios.post('http://localhost:3001/users',
        {"username":username,"email":email,"password":password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <div>
        <div className='signup-page'>
        <div className='signup-container'>
        <form onSubmit={handlesignup}>
        <h1 className='shead'>Signup</h1><br></br>

            <label>Username:</label>
            <input type='text' value={username} onChange={(e)=>{
                setUsername(e.target.value)}}/><br></br><br></br>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>{
                setEmail(e.target.value)}}/><br></br><br></br>
            <label>password:</label>
            <input type='text' value={password} onChange={(e)=>{
                setPassword(e.target.value)}}/><br></br><br></br>

        <button type='submit' className='sign-button'>Signup</button><br></br><br></br>
        <Link className='flink1' to="/login">Already have an account? Login</Link>
        </form>
        </div>
        </div>
    </div>
  )
}