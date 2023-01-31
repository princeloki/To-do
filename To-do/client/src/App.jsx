

import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import Pages from './Routes';
import axios from 'axios';


function App() {
  const [user, setUser] = useState({
    username: "",
    item: [{
      count: 0,
      content: "",
      complete: false
    }]
  })

  useEffect(() =>{
    async function storeUser() {
      const users = await fetch("/users");
      if(users.username){
        console.log(users)
        setUser(users)
      }    
    }
    storeUser()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Pages 
        username={user.username}
        items={user.item}/>
      </BrowserRouter>
    </div>
  )
}

export default App


