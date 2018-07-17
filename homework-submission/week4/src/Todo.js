/* eslint-disable */
import React, { Component } from 'react';
class Todo extends Component {
    render() {
        const TODOS = this.props.TodosList.map((element, index) =>
            <div key={index}>

                <div onClick={() => this.props.isDoneCheck(element.id)} >
                    {element.done ? <span>☑️</span> : <span>🔲</span>}
                    <div style={element.done ? { textDecoration: 'line-through' } : {}}>
                        <h2>{element.id}</h2>
                        <h2><strong> {element.description}</strong></h2>
                        <h4><strong> {element.deadline} </strong></h4>
                        <h4><strong> {element.done} </strong></h4>
                    </div>
                    <input type="submit" onClick={() => this.props.removeItems(element.id)} value="Remove" name='remove' />
                </div>
            </div>
        );

        return (

            <div >
                {TODOS}
            </div>

        );
    }
}
export default Todo;
