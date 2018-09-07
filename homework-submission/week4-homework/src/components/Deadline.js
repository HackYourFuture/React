import React, { Component } from "react";
import moment from "moment";
import { DatetimePickerTrigger } from "rc-datetime-picker";
import "./DatePicker.css";
class Deadline extends Component {
  state = {
    moment: moment(),
    value: this.props.deadline
  };

  handleChange = moment => {
    this.setState({
      moment,
      value: moment.format("ddd MMM DD YYYY")
    });
  };
  render() {
    return (
      <DatetimePickerTrigger
        moment={this.state.moment}
        onChange={this.handleChange}
      >
        <label> click to change: </label>
        <input
          type="text"
          value={this.state.value}
          readOnly
          className="date-input"
          placeholder="Select date"
        />
      </DatetimePickerTrigger>
    );
  }
}
export default Deadline;
