

import React from 'react';
import { useState } from 'react';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { useEffect } from 'react';


export default function Item(props){
    const [name, setName] = useState("")
    const [itemInfo, setItemInfo] = useState({
        count: props.count,
        content: props.content,
        complete: props.complete
    })

    useEffect(() => {

        props.onEdit(itemInfo)
    },[itemInfo])

    function handleSubmit(event){
        const date = new Date();
        setItemInfo({
            count: itemInfo.count,
            content: name + " on " +date,
            complete: true
        })
    }

    return(
        <div className='form'>
            <h2>{itemInfo.count}.</h2>
            {!itemInfo.complete && <form>
                <input 
                value={name}
                placeholder = {name ? name : "...Enter Item Here"}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={(e) => {e.key === "Enter" && handleSubmit(e)}}
                type="text"
                />
                <button type="submit">
                    <FontAwesomeIcon onClick={handleSubmit}className="icon" icon={faArrowRightToBracket}></FontAwesomeIcon>
                </button>
                <button>
                    <FontAwesomeIcon onClick={props.onRemove} className="icon" icon={faCircleXmark}></FontAwesomeIcon>
                </button>
            </form>}
            {
            itemInfo.complete && 
            <div className="list-item">
                <h2 className="list-header">{itemInfo.content}</h2>
                <button>
                    <FontAwesomeIcon onClick={()=>setItemInfo({...itemInfo, complete:false})} className="icon" icon={faPenToSquare}></FontAwesomeIcon>
                </button>
            </div>
            }
        </div>
    )
}