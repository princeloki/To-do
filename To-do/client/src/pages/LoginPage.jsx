

import '../App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    
    axios.post('http://localhost:3000/login', formData)
      .then(res => {
        if(!res.data){
          alert('Not user with that email address')
        } else if(res.data.message === 'Password does not match'){
          alert('Password does not match')
        }
        props.addUser(res.data)  
        navigate('/', { replace: true })
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="login-page">
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
        type="password"
        value={formData.password}
        name="password"
        placeholder='...Enter password'
        onChange={handleChange}
        />
        <a className="register-link" href="/register">Register here</a>
        <button type="submit">Login</button>
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

export default LoginPage
