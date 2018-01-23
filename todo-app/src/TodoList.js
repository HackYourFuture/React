import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {

  state = {
    editingTodoID: null,
  };

  handleEditTodo = (id) => {
    this.setState({editingTodoID: id});
  };
  
  handleTodoCancelEdit = () => {
    this.setState({editingTodoID: null});
    console.log('calling cancel edit')
    console.log('calling cancel edit')
};

  handleTodoSave = (id, text) => {
    this.props.onSaveTodo(id, text);
    this.handleTodoCancelEdit();
};
  // this is new feature of react in version 16
  renderList() {

    const { todos } = this.props

    return (
      <ul className="TodoList-list">
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            {index > 0 && <li className="TodoList-separator"/>}
            <Todo 
            handleDoneToggle={this.props.handleDoneToggle}
            handleRemove={this.props.handleRemove}
            handleEditTodo={this.props.handleEditTodo}
            todo={todo}
            isEditing={todo.id === this.state.editingTodoID}
            onEditClick={this.handleEditTodo}
            onSaveClick={text => { this.handleTodoSave(todo.id, text); }}
            onCancelEditClick={this.handleTodoCancelEdit}
            /> 
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
  };
};



