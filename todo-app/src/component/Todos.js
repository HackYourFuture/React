import React from "react";
import { observer, inject } from "mobx-react";

// Component
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Footer from './Footer';

@inject('TodoStore')
@observer
export default class Todos extends React.Component {
  componentDidMount() {
    this.props.TodoStore.getTodos();
  }
  render() {
    const { todos } = this.props.TodoStore;

    const hasTodos = todos.length > 0;
    return (
      <div className="todosContainer">
        <h3>Todo-List</h3>
        <AddTodoForm />
        {
          hasTodos ?
            <TodoList />
            :
            <div className="empty">
              <h3>No items...</h3>
            </div>
        }
        <Footer />
      </div>

    );
  }
}

