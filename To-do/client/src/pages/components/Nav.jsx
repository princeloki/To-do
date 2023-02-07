

import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';


export default function Nav(props){
    const [notClicked, setClick] = useState(false);

    const toggle = () =>{
        setClick(!notClicked)
    }

    function logout() {
        axios('http://localhost:3000/logout')
        .then(res=>{
            console.log(res);
        })
        localStorage.removeItem('user');
        props.addUser({
            username: "anonymous",
            item: [{
              count: 1,
              content: "",
              complete: false
            }]
          });
      }

    return(
        <nav className="nav-bar">
            <h1 className='head-icon'>To-<span className='cover'>DO</span>-List</h1>
            <FontAwesomeIcon onClick={()=>toggle()} className="burger-icon" icon={faBars}> </FontAwesomeIcon>
            <ul>
                <a href="/">Home</a>
                <a href={props.username!="anonymous" ? "#" : "login"} onClick={props.username!="anonymous" ? logout : null} >{props.username!="anonymous" ? "Logout" : "Login"}</a>
                <a href={props.username!="anonymous" ? "profile" : "register"} >{props.username!="anonymous" ? "Profile" : "Register"}</a>
            </ul>
            
        <style>{`
            ul{                
                top: ${notClicked ? '0' : '-20em'};
            }
            `}</style>
        </nav>
    )
}