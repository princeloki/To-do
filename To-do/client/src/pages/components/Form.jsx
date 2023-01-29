import '../App.css'
import { useState } from 'react'


function FormPage(props) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
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
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form className="user-form">
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
        type="text"
        value={formData.password}
        name="password"
        placeholder='...Enter password'
        onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
