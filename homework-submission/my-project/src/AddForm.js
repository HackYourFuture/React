import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class AddTodo extends Component {
  state = {
    description: '',
  }
  newTodo = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  newDate = (date) => {
    this.setState({
      deadline: date.format("YYYY-MM-DD"),
      startDate: date
    })

  }
  submit = (e) => {
    e.preventDefault();
    this.props.todos.addNewTodo(this.state.description)
    this.setState({
      description: '',
    })

  }
  render() {
    return (
      <div className="newitem">
        <form onSubmit={this.submit}>
          <div>
            <span>Enter description : </span>
            <input
              type='text'
              className="newtodo"
              id='description'
              value={this.state.description}
              onChange={this.newTodo} required />
          </div>
          <div><span>Deadline</span></div>
          <div>
            <DatePicker
              className="newdeadline"
              dateFormat="YYYY-MM-DD"
              selected={this.state.startDate}
              onChange={this.newDate}
            />
          </div>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo