import '../App.css'
import Main from './components/Main'
import Nav from './components/Nav'


function ProfilePage(props) {
  return (
    <div className="home">
      <Nav 
      username={props.username}
      />
    </div>
  )
}

export default ProfilePage
