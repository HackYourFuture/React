import React from 'react';
import {inject, observer} from 'mobx-react';
import Todo from './Todo';

@inject('todos')@observer
export default class TodoList extends React.Component {

  state = {
    editingTodoID: null,
  };

  handleEditTodo = (id) => {
    this.setState({editingTodoID: id});
  };
  
  handleTodoCancelEdit = () => {
    this.setState({editingTodoID: null})
  };

  handleTodoSave = (id, text) => {
    this.props.todos.onSaveTodo(id, text);
    this.handleTodoCancelEdit();
  };

  handleDateSave = (id, deadline) => {
    this.props.todos.onSaveDeadline(id, deadline);
  };

  renderList() {

    const { todos, handleTodoRemove, handleDoneToggle } = this.props.todos

    return (
      <ul className="TodoList-list">
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <li className="TodoList-separator"/>}
            <Todo 
            handleDoneToggle={handleDoneToggle}
            handleEditTodo={this.props.handleEditTodo}
            todo={todo}
            isEditing={todo.id === this.state.editingTodoID}
            onEditClick={this.handleEditTodo}
            onSaveClick={text => { this.handleTodoSave(todo.id, text); }}
            onSaveDateClick={deadline => { this.handleDateSave(todo.id, deadline); }}
            onCancelEditClick={this.handleTodoCancelEdit}
            onRmoveClick={handleTodoRemove}
            /> 
          </React.Fragment>
        ))}
      </ul>
    );
  };

  render() {

    return (
      <div className="TodoList">
        {this.renderList()}
      </div>
    );
  };
};



