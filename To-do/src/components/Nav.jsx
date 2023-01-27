import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function Nav(props){
    const [clicked, setClick] = useState(true);

    function toggle(){
        setClick(!clicked)
    }

    return(
        <div className="nav-bar">
            <h1>To-<span className='default-color'>DO</span>-List</h1>
            <FontAwesomeIcon onClick={toggle} className="burger-icon" icon={faBars}> </FontAwesomeIcon>
            {!clicked && <ul>
                <a href="#">Home</a>
                <a href="#" >{props.user ? "Logout" : "Login"}</a>
            </ul>}
        </div>
    )
}