import React from 'react';
import Todo from './Todo';



export default class TodoList extends React.Component {

 
  



  // this is new feature of react in version 16
  renderList() {

    const { todos } = this.props

    return (
      <ul>
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <li className="TodoList-separator"/>}
            {/* passing event handler into the comment */}
            <Todo handleDoneToggle={this.props.handleDoneToggle} todo={todo}/> 
          </React.Fragment>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="TodoList">
        {this.renderList()}
      </div>
    );
  }
  
}



