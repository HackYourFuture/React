import React from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      deadline: moment(),
      warn: false
    };
    this.deadlineHandler = this.deadlineHandler.bind(this);
    this.descriptionHandler = this.descriptionHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  deadlineHandler(date) {
    this.setState({ deadline: date });
  }

  descriptionHandler(event) {
    this.setState({ description: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    if (/^\s*$/.test(this.state.description)) {
      this.setState({ warn: true });
      return;
    }
    this.props.todos.addHandler(this.state.description, this.state.deadline.format());
    this.setState({ description: '' });
    this.setState({ deadline: moment() });
    this.setState({ warn: false });
  }

  render() {
    return (<div id='addForm'>
      <h3>Add new todo</h3>
      <form onSubmit={this.submitHandler}>
        <table>
          <tbody>
            <tr>
              <td>Description: </td>
              <td><input type='text'
                value={this.state.description}
                onChange={this.descriptionHandler} />
              </td>
            </tr>
            <tr>
              <td>Deadline: </td>
              <td><DatePicker
                selected={this.state.deadline}
                onChange={this.deadlineHandler}
                minDate={moment()} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {this.state.warn && <p className='warning'>Please fill in the required fields </p>}
        <input type='submit' value='Add' />
      </form>
    </div>);
  }
}

export default AddForm;