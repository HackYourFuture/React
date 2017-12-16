import React from 'react';
import Todo from './Todo';


const todos = [
 {
   id: '1',
   task: "Get out of bed",
   time: "Wed Sep 13 2017"
 },
 {
  id: '2',
  task: "Brush teeth",
  time: "Thu Sep 14 2017"
 },
 {
  id: '3',
  task: "Eat breakfast",
  time: "Fri Sep 15 2017" 
 }
]

export default class TodoList extends React.Component {
    render() {
      return (

        <div className="TodoList">
          {this.renderList()}
        </div>
    );
  }
  // this is new feature of react in version 16
  renderList() {
    return (
      <ul>
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <li className="TodoList-separator"/>}
            <Todo todo={todo}/>
          </React.Fragment>
        ))}
      </ul>
    )
  }
}



