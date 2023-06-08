import React, { useState } from 'react'
import './Register.scss'
import upload from '../../utils/upload.js'
import newRequest from '../../utils/newRequests'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username:'',
    email:'',
    password:'',
    img:'',
    country:'',
    isSeller:'',
    desc:''
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setUser((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSeller = (e)=>{
    setUser((prev)=>{
      return { ...prev, isSeller: e.target.checked}
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const url = await upload(file)
    try {
      await newRequest.post('/auth/register', {
        ...user,
        img:url
      })    
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div className='left'>
          <h1>Create a new accoun</h1>
            <label htmlFor=''>Username       </label>
            <input type="text" name='username' placeholder='username' onChange={handleChange} />
            <label htmlFor="">Email</label>
            <input type="text" name='email' placeholder='email' onChange={handleChange} />
            <label htmlFor="">Password</label>
            <input type="password" name='password'  onChange={handleChange}/>
            <label htmlFor="">Profile Picture</label>
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}  />
            <label htmlFor="">Country</label>
            <input type="text" name='country' placeholder='BR' onChange={handleChange} />
            <button type='submit'>Register</button>
        </div>
        <div className='right'>
          <h1>I want to became a seller</h1>
          <div className='toggle'>
            <label htmlFor="">Activate the seller account</label>
            <label className='switch'>
              <input type="checkBox" onChange={handleSeller} />
              <span className='slider round'></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="text" name='phone' onChange={handleChange} />
          <label htmlFor="">Description</label>
          <textarea
           placeholder='A short desciption of yourself '
           name='desc'
           id="" 
           cols="30" 
           rows="10"
           onChange={handleChange}>
          
           </textarea>
        </div>
      </form>
    </div>
  )
}

export default Register