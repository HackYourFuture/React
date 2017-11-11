import React from 'react';

export default class TodoItem extends React.Component {

  constructor() {
    super()
    this.state = {
      editing: false,
      editingText: ''
    }
    this.renderEditOn = this.renderEditOn.bind(this)
    this.renderEditOff = this.renderEditOff.bind(this)
  }

  deleteTodo(id) {
    this.props.onClick(id);
  }
  editTodo(id) {
    this.setState({
      editing: true,
      editingText : this.props.todo.text
    })
  }
  handleUpdate(){
    this.props.onUpdate(this.state.editingText)
    this.setState({
      editing:false,
      editingText:null
    })
  }
  handleCancel(){
    this.setState({
      editing:false
    })
  }
onTextChange(event){
this.setState({
  editingText: event.target.value
})
}
  renderEditOn() {
    return (
      <li>
        <input type= "text" value = {this.state.editingText} 
        onChange = {this.onTextChange.bind(this)} />
        <a href="#" onClick={this.handleUpdate.bind(this)}>update</a>:
        <a href="#" onClick={this.handleCancel.bind(this)}>cancel</a>
        <br />
      </li>
    )

  }
  renderEditOff() {
    return (
      <li>
        <strong>{this.props.todo.text}</strong>: {this.props.todo.status}<br />
        <a href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>Delete</a>:
        <a href="#" onClick={this.editTodo.bind(this, this.props.todo.id)}>Edit</a>
        <br />
      </li>
    )
  }

  render() {
    return (<div>
      {
        this.state.editing ? this.renderEditOn():this.renderEditOff()
      }
    </div>
    )
  }
}