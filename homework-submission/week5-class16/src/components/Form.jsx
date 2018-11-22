import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { observer, inject } from "mobx-react";
@inject("TodosStore")
@observer
class Form extends Component {
  render() {
    const { TodosStore } = this.props;
    const {
      todo,
      handleSubmit,
      handleDeadlineUpdate,
      handleDescriptionUpdate
    } = this.props;

    return (
      todo.edit === true && (
        <div>
          <input
            className="description"
            type="text"
            placeholder="New Descr.."
            onChange={handleDescriptionUpdate}
          />

          <DatePicker
            className="date_picker"
            selected={new Date()}
            onChange={handleDeadlineUpdate}
            minDate={new Date()}
          />
          <button onClick={event => handleSubmit(todo._id, event)}>
            Update
          </button>
          <button onClick={() => TodosStore.cancelEdit(todo._id)}>
            Cancel
          </button>
        </div>
      )
    );
  }
}

export default Form;
