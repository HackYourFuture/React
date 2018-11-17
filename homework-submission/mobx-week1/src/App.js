import React, { Component } from "react";
import "./Componants/index.css";
import { inject, observer } from "mobx-react";
import TodoList from "./Componants/TodoList";
// import DatePicker from "react-datepicker";
// import moment from "moment";

// import "react-datepicker/dist/react-datepicker.css";

@inject("TodoStore")
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const todo = {
      id: Date.now(),
      description: this.newDescription.value,
      deadline: this.newDeadline.value,
      done: false
    };
    this.props.TodoStore.addTodo(todo);
    this.newDescription.value = "";
    this.newDeadline.value = new Date();
  };
  render() {
    const { TodoStore } = this.props;

    return (
      <div className="App">
        <div className="main">
          <h2 className="title">TODO List</h2>
          <div className="header">
            <form className="form-inline" onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                name="description"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="description"
                ref={input => (this.newDescription = input)}
              />
              {/* <DatePicker
                selected={this.TodoStore.deadline}
                onChange={this.handleChange}
              /> */}
              <input
                type="text"
                name="deadline"
                className="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="deadline"
                ref={input => (this.newDeadline = input)}
              />
              <button type="submit" className="btn btn-primary mb-2">
                Add
              </button>
            </form>
          </div>
          <TodoList />
          <h5>You have {TodoStore.todoCount} uncompleted todos yet.</h5>
        </div>
      </div>
    );
  }
}

export default App;
