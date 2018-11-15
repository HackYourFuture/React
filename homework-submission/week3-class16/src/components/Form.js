import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {
  render() {
    const {
      stateData,
      todo,
      handleSubmit,
      handleDeadlineUpdate,
      handleDescriptionUpdate,
      handleCancelUpdate
    } = this.props;
    return (
      stateData.edit === true && (
        <div>
          <input
            className="description"
            type="text"
            placeholder="New Descr.."
            onChange={handleDescriptionUpdate}
          />

          <DatePicker
            className="date_picker"
            selected={stateData.deadline}
            onChange={handleDeadlineUpdate}
            minDate={moment()}
          />
          <button onClick={event => handleSubmit(todo.id, event)}>
            Update
          </button>
          <button onClick={handleCancelUpdate}>Cancel</button>
        </div>
      )
    );
  }
}
export default Form;
