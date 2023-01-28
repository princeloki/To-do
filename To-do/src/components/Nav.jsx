

import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



export default function Nav(props){
    const [notClicked, setClick] = useState(false);

    const toggle = () =>{
        setClick(!notClicked)
        console.log('toggle clicked')
    }

    return(
        <div className="nav-bar">
            <h1 className='head-icon'>To-<span className='cover'>DO</span>-List</h1>
            <FontAwesomeIcon onClick={()=>toggle()} className="burger-icon" icon={faBars}> </FontAwesomeIcon>
            <ul>
                <a href="#">{props.user ? props.user.name : "Home"}</a>
                <a href="#" >{props.user ? "Logout" : "Login"}</a>
            </ul>
            
        <style>{`
            ul{                
                top: ${notClicked ? '0' : '-15em'};
            }
            `}</style>
        </div>
    )
}