

import React from 'react';
import Item from './Item';
import { useState } from "react"
import { useEffect } from "react"
import { faCirclePlus, faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

export default function Main(props){
    const [items, setItems] = useState(Array.isArray(props.items) ? props.items.flat(1) :[{
        count: 1,
        content: "",
        complete: false
    }]);

    function upload(){
        axios.post('http://localhost:3000/update', {
            username: props.username,
            items: items
        })
        .then(res=>{
            console.log(res)
        })
    }

    function addItem(){
        setItems(prevItems=>[...prevItems,{
            count: items.length+1,
            content: "",
            complete: false,
        }])
    }

    
    const handleRemove = (index)=>{
        const newItems = [...items]
        newItems.splice(index, 1);
        setItems(newItems)
    }

    const handleEdit = (itemInfo)=>{
        const newItems = [...items];
        const index = itemInfo.count - 1;
        newItems[index] = {
          count: itemInfo.count,
          content: itemInfo.content,
          complete: itemInfo.complete,
        };
        setItems(newItems);
        localStorage.setItem('user', JSON.stringify({
            username: props.username,
            items: newItems
        }))
    }

    const listItems = items.map((item)=>{
        console.log(item.count)
        return(
        <Item 
        key={item.count}
        username={props.username}
        count={item.count}
        content={item.content}
        complete={item.complete}
        onRemove={()=>handleRemove(item.count-1)}
        onEdit={handleEdit}
        />)
    })

    return(
        <div className="main">
            <div className="list-edit">
                <h1 className='heading'>{`${props.username}'s List`}</h1>
                <FontAwesomeIcon onClick={upload} className="up" icon={faUpload}></FontAwesomeIcon>
            </div>
            {listItems}
            <FontAwesomeIcon onClick={addItem} className="add-item" icon={faCirclePlus}></FontAwesomeIcon>
        </div>
    )
}

