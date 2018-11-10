import React from 'react';

class TodoElement extends React.Component {
  state = {
    isEdit: false

  }
  toggleEditView = () => {
    this.setState({
      isEdit: !this.state.isEdit
    })
  }
  handleUpdate = (e) => {
    e.preventDefault()
    let oldTask = this.props.description
    let newTask = this.editField.value
    let newDate = this.secondEditField.value
    this.props.updateTodo(oldTask, newTask, newDate)
    this.setState({
      isEdit: false

    })

  }

  render() {
    let TodoView
    if (!this.state.isEdit) {
      TodoView = (
        <div className="todo" key={this.props.unique}>
          <input type='checkbox' id='description' defaultChecked={this.props.done} onChange={() => this.props.handleClick(this.props.unique)} />
          <span className={this.props.done ? 'checked' : 'notChecked'}>{this.props.description}, {this.props.deadline}</span>
          <button onClick={this.toggleEditView}>Edit</button>
          <button onClick={() => this.props.deleteTodo(this.props.unique)}>Delete</button>
        </div >
      )
    } else {
      TodoView = (
        <form>
          <div className="todo editMode" key={this.props.unique}>
            <input type='checkbox' defaultChecked={this.props.done} />
            <input type='text' defaultValue={this.props.description} ref={(chEl) => (this.editField = chEl)} />
            <input type='text' defaultValue={this.props.deadline} ref={(dateEl => (this.secondEditField = dateEl))} />
            <button onClick={this.handleUpdate}>Update</button>
            <button onClick={this.toggleEditView}>Cancel</button>
          </div>
        </form>
      )
    }

    return <li>
      {TodoView}
    </li>
  }
}

export default TodoElement