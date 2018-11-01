import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

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
    this.setState({ deadline: moment() });
    this.setState({ edit: false });
  };

  render() {
    const { todo } = this.props;
    const form = () => {
      if (this.state.edit === true) {
        return (
          <div>
            <input
              className="description"
              type="text"
              placeholder="New Descr.."
              onChange={this.handelDescriptionUpdate}
            />

            <DatePicker
              className="date_picker"
              selected={this.state.deadline}
              onChange={this.handelDeadlineUpdate}
              minDate={moment()}
            />
            <button onClick={event => this.handleSubmit(todo.id, event)}>
              Update
            </button>
            <button onClick={this.handleCancelUpdate}>Cancel</button>
          </div>
        );
      }
    };

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
        <React.Fragment>{form()}</React.Fragment>
      </div>
    );
  }
}
