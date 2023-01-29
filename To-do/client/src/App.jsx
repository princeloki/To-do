import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter } from 'react-router-dom';
import Pages from './Routes';


function App() {
  const [user, setUser] = useState()
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
