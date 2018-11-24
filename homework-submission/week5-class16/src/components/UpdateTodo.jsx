import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Form from "./Form";
import { observer, inject } from "mobx-react";

@inject("TodosStore")
@observer
class UpdateTodo extends Component {
  state = { description: "", deadline: Date.now() };

  handleDescriptionUpdate = e => {
    this.setState({
      description: e.target.value
    });
    console.log(e.target.value);
  };

  handleDeadlineUpdate = date => {
    this.setState({ deadline: date });
    console.log(date);
  };

  handleSubmit = (todoId, event) => {
    event.preventDefault();
    const { TodosStore } = this.props;
    TodosStore.handleUpdate(
      todoId,
      this.state.description,
      this.state.deadline
    );
  };

  render() {
    const { todo } = this.props;
    const { TodosStore } = this.props;

    return (
      <div>
        <div>
          <button
            className="btn btn-warning btn-bg m-2"
            onClick={() => TodosStore.handleEdit(todo._id)}
          >
            Edit Todo
          </button>
        </div>
        <React.Fragment>
          <Form
            stateData={this.state}
            todo={todo}
            handleSubmit={this.handleSubmit}
            handleDescriptionUpdate={this.handleDescriptionUpdate}
            handleDeadlineUpdate={this.handleDeadlineUpdate}
          />
        </React.Fragment>
      </div>
    );
  }
}
export default UpdateTodo;
