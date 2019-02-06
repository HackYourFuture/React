import React, { Component } from 'react'
import Service from './service'

class AddForm extends Component {
  state = {
    photoUrl: '',
    description: ''
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleAdd = event => {
    event.preventDefault();

    Service.addPost({
      photoUrl: this.state.photoUrl,
      description: this.state.description,
      author: this.props.author,
      comment: [],
      like: []
    })
      .then(
        this.setState({
          photoUrl: '',
          description: '',
          form: 'list'
        })
      )
    this.props.onAdd(this.state)
    console.log('addFormProps ', this.props);
  }

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <p onClick={this.handleBack}>Photo Wall</p>
        <input type='text' placeholder='Image source' name='photoUrl' onChange={this.handleInputChange} />
        <input type='text' placeholder='Description' name='description' onChange={this.handleInputChange} />
        <input type='submit' value='add' />
      </form>

    )
  }
}


export default AddForm;