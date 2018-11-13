import React, { Component } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import Form from "./Form";

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", deadline: moment(), edit: false };
  }

  changeEditState = () => {
    this.setState({ edit: true });
  };
  handleCancelUpdate = () => {
    this.setState({ edit: false });
  };
  handelDescriptionUpdate = e => {
    this.setState({
      description: e.target.value
    });
  };
  handelDeadlineUpdate = date => {
    this.setState({ deadline: date });
  };
  handleSubmit = (todoId, event) => {
    event.preventDefault();
    this.props.OnUpdate(todoId, this.state.description, this.state.deadline);
    this.setState({ description: "" });

    this.setState({ edit: false });
  };

  render() {
    const { todo } = this.props;

    return (
      <div>
        <div>
          <button
            className="btn btn-warning btn-bg m-2"
            onClick={this.changeEditState}
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
