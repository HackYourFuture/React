import React from "react";
import { observer, inject } from "mobx-react";

// Component
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import Footer from './Footer';

@inject('TodoStore')
@observer
export default class Todos extends React.Component {

  render() {
    const { handelCheck,
      handelDeleteItem,
      handleDateChange,
      handleDescriptionChange,
      handleSubmit,
      newDeadline,
      newDescription,
      todos,
    } = this.props.TodoStore;

    const hasTodos = todos.length > 0;
    
    return (
      <div className="todosContainer">
        <h3>Todo-List</h3>
        <AddTodoForm description={newDescription}
          deadline={newDeadline}
          handleDescriptionChange={handleDescriptionChange}
          handleDateChange={handleDateChange}
          handleSubmit={handleSubmit}
        />
        {hasTodos ? (
          <TodoList todos={todos}
            handelCheck={handelCheck}
            handelDeleteItem={handelDeleteItem}
          />
        ) : (
            <div className="empty">
              <h3>No items...</h3>
            </div>
          )}
        <Footer todos={todos} />
      </div>

    );
  }
}
