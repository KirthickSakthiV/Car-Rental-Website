import React, { useEffect, useState } from 'react'
import {useAuth} from './Auth'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
export const Login = () => {
    const navigate=useNavigate()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [userlist,setUserList]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:3001/users')
        .then(res=>setUserList(res.data))
        .catch(err=>console.log(err))
    },[])
    const auth=useAuth()
    const handlelogin=(e)=>{
        e.preventDefault()
        const userExit=userlist.some(u=>u.username===username && u.password===password)
        if(userExit){
            auth.login(username)
            navigate('/home')
        }else{
            alert("invalid password or user")
        }
    }

  return (
    <div>
        <div className='login-page'>
       <div className='login-container'>
        <form onSubmit={handlelogin}>
        <h1>Login page</h1><br></br>

            <label>Username:</label>
            <input type='text' value={username}  placeholder={'Username'} onChange={(e)=>{
                setUsername(e.target.value)}}/>
            <br></br>
            <br></br>
            <label>password:</label>
            <input type='password' value={password} placeholder={'Password'}onChange={(e)=>{
                setPassword(e.target.value)}}/>
        <br></br>
        <br></br>
        <button type='submit' className='login-button'>Login</button><br></br>
        <br></br>
        
        <Link className='flink' to="/signup">Don't have an account? signup</Link><br></br>
        </form>
       </div>
    </div>
    </div>
  )
}