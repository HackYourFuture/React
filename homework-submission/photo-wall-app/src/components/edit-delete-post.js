import React, { Component } from "react";
import Service from "./service";

export default class EditPost extends Component {
  state = {
    post: this.props.post,
    photoUrl: "",
    description: "",
    edit: false
  };
  switchFrom = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleEdit = event => {
    event.preventDefault();
    Service.updatePost(this.props.post.id, {
      photoUrl: this.state.photoUrl,
      description: this.state.description
    }).then(post => {
      this.setState({
        photoUrl: "",
        description: ""
      });
      this.props.onUpdate(post);
    });
    this.setState({ edit: !this.state.edit });
  };

  handleDelete = () => {
    Service.deletePost(this.props.post.id);
    this.setState({
      photoUrl: "",
      description: ""
    });
    this.props.onDelete(this.props.post);
    this.setState({ edit: !this.state.edit });
  };

  render() {
    let ownersControls = (
      <div>
        <h6 onClick={this.switchFrom}>edit</h6>
        <h6 onClick={this.handleDelete}>delete</h6>
      </div>
    );
    let editForm = (
      <div>
        <form onSubmit={this.handleEdit}>
          <h6 onClick={this.switchFrom}>back</h6>
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
          <input type="submit" value="save" />
        </form>
      </div>
    );

    return <div>{this.state.edit === true ? editForm : ownersControls}</div>;
  }
}
