

import '../App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import { useState,useEffect } from 'react'
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    items: [{
      count: 0,
      content: "",
      complete: false
    }]
  })

  function handleChange(e){
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/register', formData)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="register-page">
      <Nav />
      <form onSubmit={handleSubmit} className="authenticate user-form">
        <input 
        type="text"
        value={formData.email}
        name="email"
        placeholder='...Enter email address'
        onChange={handleChange}
        />
        <input 
        type="text"
        value={formData.username}
        name="username"
        placeholder='...Enter username'
        onChange={handleChange}
        />
        <input 
        type="password"
        value={formData.password}
        name="password"
        placeholder='...Enter password'
        onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>

      <style>
        {`
          body{
            background: #42b982;
          }
        `}
      </style>
    </div>
  )
}

export default RegisterPage
