import React, { Component } from 'react'

import Checkbox from './sub-components/Checkbox';
import InputField from './sub-components/InputField'

class ListItem extends Component {
  // The Worst practice Ever
  state = {
    edit: false
  }
  
  handleSubmit = (event) => {
    const { id } = this.props
    event.preventDefault()
    this.props.handleUpdateListItem(event, id, 'description', event.target.description.value)
    this.props.handleUpdateListItem(event, id, 'deadline', event.target.deadline.value)
    this.setState({ edit: false })
  }
  handleCancel = (event) => {
    event.preventDefault()
    this.setState({ edit: false })
  }
  handleEdit = (event) => {
    event.preventDefault()
    this.setState({ edit: true })
  }
  ItemRender = () => {
    const {
      description,
      deadline,
      handleRemove,
      handleCheckboxUpdate,
      id,
      done
    } = this.props
    return (
      <div className="form">
        <Checkbox id={id} handleCheckboxUpdate={handleCheckboxUpdate} done={done} />
        <span>{description}</span> <span>{deadline}</span>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={(event) => handleRemove(event, id)}>Remove Item</button>
      </div>
    )
  }
  UpdateRender = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField name="description" />
        <InputField name="deadline" />
        <input type="submit" value="Add Item" />
        <button onClick={this.handleCancel}>Cancel</button>
      </form>
    )
  }
  render() {
    return (
      <div>
        {
          (this.state.edit) ? <this.UpdateRender /> : <this.ItemRender />
        }
      </div>
    )
  }
}

export default ListItem