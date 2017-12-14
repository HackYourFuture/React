import React, { Component } from 'react';

class TodoDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingText: ''
    }

    this.edit = this.edit.bind(this)
    this.update = this.update.bind(this)
    this.cancel = this.cancel.bind(this)
    this.renderNormal = this.renderNormal.bind(this)
    this.renderOnEdit = this.renderOnEdit.bind(this)
  }

  edit() {
    this.props.onEditOn()
      this.setState({
      editingText: this.props.description
      
    })
  }

  update(event) {
    this.props.onUpdate(this.state.editingText)
    this.setState({
      editingText: ''
    })
  }

  cancel(event) {
    this.props.onEditOff()
  }

  onTextChange = (event) => {
    this.setState({
      editingText: event.target.value
    })
  }

  renderOnEdit() {
    return (
      <div>
        <input type="text" value={this.state.editingText} onChange={this.onTextChange} />
        <button onClick={this.update}>update</button>
        <button onClick={this.cancel}>cancel</button>
      </div>
    )
  }
  renderNormal() {
    return (
      <div>
        {this.props.description}
        <button onClick={this.edit}> edit </button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.edit ? this.renderOnEdit() : this.renderNormal()}
      </div>
    )
  }
}

export default TodoDescription