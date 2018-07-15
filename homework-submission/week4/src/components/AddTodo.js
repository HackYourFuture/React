import React, { Component } from "react";
import styles from './Style/Form.css';

class AddTodo extends Component {
  render() {
    const { add_todo } = this.props;
    return (
        
      <form onSubmit={add_todo}>
        <h2> Add New Todo</h2>
        <input type="text" name="description" placeholder="Description"  />
        <input type="date" name="deadline" placeholder="Deadline"  />
        <button type="submit" name="add" value="Add" class={styles.submitbtn} >Add</button>
      </form>
    )
  }
}

export default AddTodo;