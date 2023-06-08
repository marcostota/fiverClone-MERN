import React, { useState } from 'react'
import './Login.scss'
import newRequest from '../../utils/newRequests.js'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username,setUsername] = useState('')
  const [password,setPassword]= useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const res = await newRequest.post('/auth/login' , {username, password})
      localStorage.setItem('currentUser', JSON.stringify(res.data))
      navigate('/')
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (

    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name='username' type="text" placeholder='' onChange={e=>setUsername(e.target.value)}  />
        <label htmlFor="">Password</label>
        <input type="paswword"  name='password' placeholder='password' onChange={e=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && error}
      </form>
    </div>
    )
}

export default Login