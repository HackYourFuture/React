import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { observer, inject } from "mobx-react";

import "moment-timezone";

@inject("TodosStore")
@observer
class AddForm extends Component {
  state = {
    description: "",
    deadline: Date.now()
  };

  handleDateChange = date => {
    this.setState({ deadline: date });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.TodosStore.handleAddTodo(
      this.state.description,
      this.state.deadline
    );
    this.setState({ description: "", deadline: Date.now() });
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
          selected={new Date()}
          onChange={this.handleDateChange}
          minDate={new Date()}
        />
        <button className="btn btn-secondary btn-bg m-2" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}
export default AddForm;
