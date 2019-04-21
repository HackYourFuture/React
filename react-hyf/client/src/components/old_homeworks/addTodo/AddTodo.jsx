import React, { Component } from './node_modules/react';

export class AddTodo extends Component {
  state = {
    desc: '',
  };

  // Handle Add Todo Submit Button
  handle_submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.desc);
    this.setState({ desc: '' });
  };

  // Handle Add Todo Input Change
  handle_change_input = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Submit Button Style
  submitBtnStyle = () => {
    return { flex: '1', background: '#222', color: '#eee', lineHeight: '200%' };
  };

  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.handle_submit}>
        {/* Input Text */}
        <input
          type="text"
          name="desc"
          value={this.state.desc}
          placeholder="Add todo..."
          onChange={this.handle_change_input}
          style={{ flex: '8' }}
        />

        {/* Submit Button */}
        <input style={this.submitBtnStyle()} type="submit" value="submit" />
      </form>
    );
  }
}

export default AddTodo;
