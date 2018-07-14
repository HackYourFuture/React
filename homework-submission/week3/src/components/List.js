import React, { Component } from 'react';

// Import components
import Deadline from './Deadline';
import Description from './Description';
import Done from './Done';
import Data from '../todo-list-data.json';
import AddTodo from './AddTodo'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: Data,
        }
    }
    checkStatus = (id) => {
        const newList = this.state.list.map((element) => {
          if (id === element.id) {
            return {
              ...element,
              done: !element.done
            }
          }
          return element;
        });
        this.setState({ list: newList });
      }
      addTodo = (e) => {
        e.preventDefault();
        const newList = {
          "id": this.state.list.length + 1,
          "description": e.target.description.value,
          "deadline": e.target.deadline.value,
          "done": false
        }
  
        this.setState({ list: this.state.list.concat(newList) });
      }

      removeTodo = (id)=>{
 
 
        const newTodoItems = this.state.list.filter((element)=> element.id !== id);
        console.log(newTodoItems);
        this.setState({list : newTodoItems })
      }
    
    render() {
        return (
            <div>
                <AddTodo add_todo={this.addTodo}/>
                <ul>
                    {
                        this.state.list.map((element) =>
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