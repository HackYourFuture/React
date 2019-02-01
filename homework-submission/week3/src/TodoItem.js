import React, { Component } from 'react';


class TodoItem extends Component {
  state = {
    description: "",
    deadline: "",
    edit: false
  };
  changedValue = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  }

  onEdit = () => {
    this.setState({
      edit: true
    });
  };

  onUpdate = (e) => {
    e.preventDefault()
    const newDescription = this.state.description;
    const newDeadLine = this.state.deadline;
    if (newDescription.length === 0 || newDeadLine.length === 0) {
      alert("Please fill the form")
      return;
    }
    this.props.updateHandler(newDescription, newDeadLine, this.props.index);
    this.setState({
      description: "",
      deadline: "",
      edit: false
    });
  };

  onCancel = () => {
    this.setState({
      edit: false
    });
  }

  render() {
    const todo = this.props.todo;
    const editStatus = this.state.edit ? (
      <React.Fragment >
        <input id='box' name='description' type='text' Value={todo.description} onChange={this.changedValue} />
        <input id='box' name='deadline' type="date" Value={todo.deadline} onChange={this.changedValue} />
        <button id="list-button" type="submit" onClick={this.onUpdate} >Update</button>
        <button id="list-button" onClick={this.onCancel} >Cancel</button>
      </React.Fragment>
    ) : (
        <React.Fragment>
          {todo.description} , {todo.deadline}
          <input id="list-button" type="button" value="edit" onClick={this.onEdit} />
        </React.Fragment>
      );
    return (
      <li className={todo.done && 'done'}>
        <input type="checkbox" onChange={() => this.props.handler(this.props.index)} defaultChecked={todo.done} />
        {editStatus}
        <input id="list-button" type="button" value="Delete" onClick={() => this.props.deleteHandler(this.props.index)} />
      </li>
    );
  }
}
export default TodoItem;