import React from 'react'

export default function HyfInput({name, value, onHandleInputChange}) {
    return (
        
            <input className="itemInput" type='text' placeholder="Please add your item" value={value} name={name} onChange={onHandleInputChange}/>
    )
}
