import React, { Component } from 'react';
import '../App.css';
import uuid from 'uuid';

const ComponentHeader =(props)=>{
    return (
    <div>
      <h2 className="Componentheader">{props.title} </h2>
    </div>
    );
};

class Staticlist extends Component {   
    render() {
        return (
        <div className="staticlist">
            <ul>
                <li> {this.props.description}/<b>Deadline :</b> {this.props.deadline}</li>
            </ul>
        </div>
        );
    }
}

const Todo = props => {
    const {id,description, deadline, done } = props.todo;
    return (
        <li className={done ? 'done' : ''} key={id}>
      {description} /<b>Deadline :</b> {deadline} 
    </li>
    );
  };
  

class Homework1 extends Component {
    state = {
        todos: [
          {
            id: uuid.v4(),
            description: 'Get out of bed',
            deadline: '2017-09-11',
            done: true,
          },
          {
            id: uuid.v4(),
            description: 'Brush teeth',
            deadline: '2017-09-10',
            done: false,
          },
          {
            id: uuid.v4(),
            description: 'Eat breakfast',
            deadline: '2017-09-09',
            done: false,
          },
        ],
      };
    
  render() {
    return (
      
      <div className="homework1" >
        <ComponentHeader title="Static List"/>
        <Staticlist description="Get out of bed" deadline="Wed Sep 13 2017"/>
        <Staticlist description="Brush teeth" deadline="Thu Sep 14 2017"/>
        <Staticlist description="Eat breakfast" deadline="Fri Sep 15 2017"/>
        <ComponentHeader title="Dynamic List"/>
        <ul>
            {this.state.todos.map(todo => (
                <Todo className="dynamiclist" todo={todo} key={todo.id}/>
            ))}
        </ul>
      </div>
    );
  }
}

export default Homework1;
