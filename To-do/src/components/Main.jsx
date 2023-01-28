

import React from 'react';
import Item from './Item';
import { useState } from "react"
import { useEffect } from "react"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Main(props){
    const [count, setCount] = useState(1)
    const [items, setItems] = useState([{
            count: count,
            content: "",
            complete: false,
            },
        ]
    );

    function addItem(){
        setCount(count + 1);
        setItems(prevItems=>[...prevItems,{
            count: count+1,
            content: "",
            complete: false,
    }])
    }

    const listItems = items.map((item)=>{
        return(
        <Item 
        key={item.count}
        count={item.count}
        content={item.content}
        complete={item.complete}
        />)
    })

    return(
        <div className="main">
            <h1 className='heading'>{props.user ? `${props.user}'s List` : "Anonymouse's List"}</h1>
            {listItems}
            <FontAwesomeIcon onClick={addItem} className="add-item" icon={faCirclePlus}></FontAwesomeIcon>
        </div>
    )
}