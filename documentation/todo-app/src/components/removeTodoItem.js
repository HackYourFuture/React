import React from 'react'

export default class RemoveTodo extends React.Component {

    removeTodo(todo, i) {
        this.props.handleRemoveTodo( todo, i)
    }

    render() {

        return (
            <tr>
                {this.props.todoS.map((todo, i) => {
                    return  
                    <td
                        onclick={() => { this.handleRemoveTodo(todo, i) }}
                        key={i}
                    >{todo}
                     </td>   
                })}
            </tr>
        )
    }
}