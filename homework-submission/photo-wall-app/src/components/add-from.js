import React, { Component } from "react";
import Service from "./service";

class AddForm extends Component {
  state = {
    photoUrl: "",
    description: "",
    comment: [],
    like: []
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleAdd = event => {
    event.preventDefault();
    Service.addPost({
      photoUrl: this.state.photoUrl,
      description: this.state.description,
      author: this.props.author,
      comment: [],
      like: []
    }).then(post => {
      this.setState({
        photoUrl: "",
        description: ""
      });
      this.props.onAdd(post);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <h5>insert source and description</h5>
          <br />
          <input
            type="text"
            placeholder="Image source"
            name="photoUrl"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleInputChange}
          />
          <input type="submit" value="add" />
        </form>
      </div>
    );
  }
}

export default AddForm;
