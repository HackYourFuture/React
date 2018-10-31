import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AddTodo extends Component {
  state = {
    description: '',
    deadline: '',
    done: false,
    startDate: moment()
  }
  handleTodoChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }
  handleDate = (date) => {
    this.setState({
      deadline: date.format("YYYY-MM-DD"),
      startDate: date
    })

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
    this.setState({
      description: '',
      deadline: '',
      done: false,
      startDate: moment()
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Add new todo</label>
            <input type='text' id='description' onChange={this.handleTodoChange} required />
          </div>
          <label>Choose the deadline</label>
          <div>
            <DatePicker
              dateFormat="YYYY-MM-DD"
              selected={this.state.startDate}
              onChange={this.handleDate}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddTodo