import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo'
import uuid from 'uuid';
import { observer } from 'mobx-react';

class App extends React.Component {

  getTodos() {
    this.props.store.todos = [
      {
        id: uuid.v4(),
        text: 'Brush your teeth',
        status: 'Done'
      },
      {
        id: uuid.v4(),
        text: 'Do grocery shopping',
        status: 'Not Done'
      },
      {
        id: uuid.v4(),
        text: 'Do your homework',
        status: 'Not Done'
      }
    ];
  }

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <AddTodo addTodo={this.props.store.handleAddTodo} />
        <hr />
        <h1>Todo list:</h1>
        <TodoList todos={this.props.store.todos}
          onClick={this.props.store.handleDeleteTodo}
          onUpdate={this.props.store.handleUpdateTodo} />
      </div>
    );
  }
}

export default observer(App);