import '../App.css'
import Main from './components/Main'
import Nav from './components/Nav'


function HomePage(props) {
  return (
    <div className="app">
      <Nav 
      username={props.username}
      />
      <Main 
      username={props.username}
      items={props.items}
      />
    </div>
  )
}

export default HomePage
