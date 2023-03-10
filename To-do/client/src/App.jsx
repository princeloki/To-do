import { useState, useEffect } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import Pages from './Routes';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {
    username: "anonymous",
    items: [{
      count: 1,
      content: "",
      complete: false
    }]
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  function createUser(userData){
    setUser(userData)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Pages 
        username={user.username}
        items={user.items}
        addUser={createUser}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
