import React from 'react';
import { inject, observer } from 'mobx-react';
import { todoStore } from './stores';
import Todo from './Todo';
import TodoForm from './TodoForm';
import loadinImage from './loadingImage.gif';

@inject('todoStore')
@observer

export default class TodoList extends React.Component {

  state = {
    editingTodoID: null
  };

  componentDidMount = () => {
    todoStore.loadTodoItems();
  }

  handleTodoAdd = (newTodo, date) => {
    todoStore.addTodo(newTodo, date);
  };

  handleRemoveTodo = (todoItem) => {
    todoStore.removeTodo(todoItem);

  }

  toggleStatus = (todoID) => {
    todoStore.toggleStatus(todoID);
  }

  handleEditTodo = id => {
    this.setState({ editingTodoID: id });
  };
  handleCancleEdit = () => {
    this.setState({ editingTodoID: null });
  }
  handleSaveEdit = (id, description) => {
    todoStore.handleSaveEdit(id, description);
    this.setState({ editingTodoID: null });
  };

  render() {
    if (todoStore.loadingTodos) {
      return (
        <img src={loadinImage} alt='loading' />
      )
    }
    return (
      <div>
        <TodoForm
          ontodoAdd={this.handleTodoAdd}
        />
        <ul className='tasks'>
          {todoStore.loadingTodos}
          {todoStore.todos.map((todoItem, i) =>
            <Todo
              key={todoItem._id}
              todoItem={todoItem}
              toggleStatus={this.toggleStatus}
              onRemove={this.handleRemoveTodo}
              isEditing={todoItem._id === this.state.editingTodoID}
              onEdit={this.handleEditTodo}
              onCancleEdit={this.handleCancleEdit}
              onSaveEdit={this.handleSaveEdit}
            />
          )}
        </ul>
      </div>
    );
  }
}