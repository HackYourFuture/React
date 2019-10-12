import React from 'react'

export default function TodoItems({name, id, buttonText, handleChange, handleRemove}) {
    return (
        <ul>
        <li>
        <input type="checkbox" onChange={handleChange}/>
        {name} 
        <button className="remove-btn" onClick={handleRemove}>{buttonText}</button>
        </li>
        </ul>
        
    )
}
