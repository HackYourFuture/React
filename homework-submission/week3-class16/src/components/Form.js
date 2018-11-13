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
      handelDeadlineUpdate,
      handelDescriptionUpdate,
      handleCancelUpdate
    } = this.props;
    return (
      stateData.edit === true && (
        <div>
          <input
            className="description"
            type="text"
            placeholder="New Descr.."
            onChange={handelDescriptionUpdate}
          />

          <DatePicker
            className="date_picker"
            selected={stateData.deadline}
            onChange={handelDeadlineUpdate}
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
