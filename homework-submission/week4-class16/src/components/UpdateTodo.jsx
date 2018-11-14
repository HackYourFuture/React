import React, { Component } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Form from "./Form";
import { observer, inject } from "mobx-react";

@inject("TodosStore")
@observer
class UpdateTodo extends Component {
  state = { description: "", deadline: moment() };

  handelDescriptionUpdate = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleCancelUpdate = () => {
    const { TodosStore } = this.props;
    TodosStore.Data.map(todo => {
      if (todo.edit) {
        return (todo.edit = !todo.edit);
      }
      return todo;
    });
  };
  handelDeadlineUpdate = date => {
    this.setState({ deadline: date });
  };
  handleSubmit = (todoId, event) => {
    event.preventDefault();
    const { TodosStore } = this.props;
    TodosStore.handelUpdate(
      todoId,
      this.state.description,
      this.state.deadline
    );

    const i = TodosStore.Data.findIndex(todo => todo.id === todoId);
    TodosStore.Data[i].edit = !TodosStore.Data[i].edit;
  };

  render() {
    const { todo } = this.props;
    const { TodosStore } = this.props;

    return (
      <div>
        <div>
          <button
            className="btn btn-warning btn-bg m-2"
            onClick={() => TodosStore.handleEdit(todo.id)}
          >
            Edit Todo
          </button>
        </div>
        <React.Fragment>
          <Form
            stateData={this.state}
            todo={todo}
            handleSubmit={this.handleSubmit}
            handleCancelUpdate={this.handleCancelUpdate}
            handelDescriptionUpdate={this.handelDescriptionUpdate}
            handelDeadlineUpdate={this.handelDeadlineUpdate}
          />
        </React.Fragment>
      </div>
    );
  }
}
export default UpdateTodo;
