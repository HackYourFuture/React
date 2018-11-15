import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { observer, inject } from "mobx-react";
@inject("TodosStore")
@observer
class Form extends Component {
  render() {
    const { TodosStore } = this.props;
    const {
      stateData,
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
            selected={stateData.deadline}
            onChange={handleDeadlineUpdate}
            minDate={moment()}
          />
          <button onClick={event => handleSubmit(todo.id, event)}>
            Update
          </button>
          <button onClick={() => TodosStore.cancelEdit(todo.id)}>Cancel</button>
        </div>
      )
    );
  }
}

export default Form;
