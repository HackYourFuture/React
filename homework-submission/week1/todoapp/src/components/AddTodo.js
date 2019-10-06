/*This file get todo from user input and add it to list,
 *!!!> commands are not important! just for self learning */

// we need a local state for this component to store what are user types into the import field and since we need state this should be a class-based component
// extends component>> to inherit the functionality of a component in react
//render()>> JSX template
import React, { Component } from 'react';
class AddTodo extends Component {
  //we want set state to content on input match is the content in state so we create that content property and set it equal empty string
  state = {
    description: '',
  };
  //handleChange is gonna take event object
  // whenever it changes we want to update our content property
  //now everything inside content is being kept in sync with >><input type="text" onChange={}/
  handleChange = e => {
    this.setState({
      description: e.target.value,
    });
  };
  // first of all prevent default action the form being submitted which is to refresh the page
  //we passed state object with content into addTodo function and we receive that object over route component and add it to the array

  //when do we want to empty that field? well! when a user submit, so inside handle submit, its just gonna reset state after we submit it
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      description: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo</label>
          <input type="text" onChange={this.handleChange} value={this.state.description} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
