import React from 'react'

export default function TodoList({children, input, button}) {
    return (
        <div>
        <h1>To-Do List</h1>
        <span>{input} {button}</span>
        {children}
        </div>
    )
}
