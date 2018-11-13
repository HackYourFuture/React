import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class AddForm extends Component {
  state = {
    description: "",
    deadline: moment()
  };

  handleDateChange = date => {
    this.setState({ deadline: date });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddTodo(this.state.description, this.state.deadline);
    this.setState({ description: "", deadline: moment() });
  };

  render() {
    return (
      <form className="add_form" onSubmit={this.handleSubmit}>
        <input
          className="description"
          type="text"
          placeholder="Descrip.."
          onChange={this.handleDescriptionChange}
          value={this.state.description}
          required
        />

        <DatePicker
          className="date_picker"
          selected={this.state.deadline}
          onChange={this.handleDateChange}
          minDate={moment()}
        />
        <button className="btn btn-secondary btn-bg m-2" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}
export default AddForm;
