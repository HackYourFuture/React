import React from 'react';
const uuidv4 = require('uuid/v4');

export default class NewToDoComponent extends React.Component {

  state = {
    id: 0,
    description: '',
    deadline: '',
    done: false
  }
  onValueChange = (e) => {
    const name = e.target.name;
    this.setState({ id: uuidv4(), [name]: e.target.value });
  }

  onFormSubmit = (e) => {
    this.props.passPropToChild(this.state);
    this.setState({ description: '', deadline: '' });
    e.preventDefault();
  }
  /**
   * Buy react book from Amazon
   * 2019-01-24
   * 
   */
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            NewTodo:
            <input name='description' type='text' value={this.state.description} onChange={this.onValueChange} />
          </label>
          <label>
            Deadline:
            <input name='deadline' type='text' value={this.state.deadline} onChange={this.onValueChange} />
          </label>
          <input type='submit' value='submit' />
        </form>
      </div>

    );
  }
}