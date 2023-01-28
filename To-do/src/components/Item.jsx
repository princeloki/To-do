

import React from 'react';
import { useState } from 'react';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Item(props){
    const [name, setName] = useState("")
    const [itemInfo, setItemInfo] = useState({
        count: props.count,
        content: props.content,
        complete: props.complete
    })

    function handleSubmit(event){
        setItemInfo({
            count: itemInfo.count,
            content: name,
            complete: true
        })
        console.log(itemInfo.content)
    }

    return(
        <div className='form'>
            <h2>{itemInfo.count}.</h2>
            {!itemInfo.complete && <form>
                <input 
                value={name}
                placeholder = {name ? name : "...Enter Item Here"}
                onChange={(e) => setName(e.target.value)}
                type="text"
                />
                <button type="submit">
                    <FontAwesomeIcon onClick={handleSubmit}className="icon" icon={faArrowRightToBracket}></FontAwesomeIcon>
                </button>
            </form>}
            {
            itemInfo.complete && 
            <div className="list-item">
                <h2 className="list-header">{itemInfo.content}</h2>
                <button>
                    <FontAwesomeIcon onClick={()=>setItemInfo({...itemInfo, complete:false})} className="icon" icon={faCircleXmark}></FontAwesomeIcon>
                </button>
            </div>
            }
        </div>
    )
}