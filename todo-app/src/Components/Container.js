import React, { Component } from 'react';
import Checkbox from './Checkbox'
import '../App.css';

export default class Container extends Component {

    render() {
        const {
            todoItems,
            handelDoneStatus
        } = this.props

        return (<div>
            <ul>
                {todoItems.map((item, index) => {
                    return <li key={item.id} className="app-list">
                        <Checkbox id={item.id}
                            description={item.description}
                            deadline={item.deadline}
                            done={item.done}
                            index={index}
                            handelDoneStatus={handelDoneStatus}/>
                    </li>
                })}
            </ul>
        </div>
        )
    }
}