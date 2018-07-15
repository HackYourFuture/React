import React, { Component } from 'react';

// Import components
import Deadline from './Deadline';
import Description from './Description';
import Done from './Done';
import AddTodo from './AddTodo'
import { inject, observer } from "mobx-react";

class List extends Component {
    
    @inject("ListClass")

    @observer
    
    render() {
        const { checkStatus, addTodo, removeTodo, Data } = this.props.ListClass;
        return (
            <div>
                <AddTodo add_todo={this.addTodo}/>
                <ul>
                    {
                        this.Data.map((element) =>
                            <li key={element.id}>
                                <input type="checkbox" defaultChecked={element.done} onClick={() => this.checkStatus(element.id)} />
                                <Description description={element.description} />
                                <Deadline deadline={element.deadline} />
                                <Done done={element.done} />
                                <button type="button" class="cancelbtn" onClick={()=>this.removeTodo(element.id)}>Remove</button>   
                            </li>)
                    }
                </ul>
            </div>

        );
    }

}

export default List;