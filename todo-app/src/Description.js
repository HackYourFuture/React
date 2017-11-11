import React, { Component } from 'react'

class Description extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editingText: ''
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.renderEditOff = this.renderEditOff.bind(this)
    this.renderEditOn = this.renderEditOn.bind(this)
  }
  handleEdit() {
    this.props.onEditOn()
    this.setState({
      editingText: this.props.description
    })
  }

  handleCancel(event) {
    this.props.onEditOff()
  }

  onTextChange = (event) => {
    this.setState({
      editingText: event.target.value
    })
  }

  handleUpdate(event) {
    this.props.onUpdate(this.state.editingText)
    this.setState({
      editingText: ''
    })
  }

  renderEditOff() {
    return (
      <div>
        {this.props.description}
        <button
          onClick={this.handleEdit}
        >
          edit
        </button>
      </div>
    )
  }

  renderEditOn() {
    return (
      <div>
        <input type="text" value={this.state.editingText} onChange={this.onTextChange} />
        <button onClick={this.handleUpdate}>update</button>
        <button onClick={this.handleCancel}>cancel</button>
      </div>
    )
  }

  render() {
    return (
      <div className='buttons'>
        {this.props.editingState ? this.renderEditOn() : this.renderEditOff()}
      </div>
    )
  }
}

export default Description