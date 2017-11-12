import React, { Component } from 'react';
import {observer} from 'mobx-react';

class AddComment extends Component {
  handleInputChange = (event) => {
    const propertyToUpdate = event.target.name;
    const valueOfPropertyToUpdate = event.target.value;
    this.props.onNewCommentUpdate(propertyToUpdate, valueOfPropertyToUpdate);
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onAddComment(this.props.newComment);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            name="username"
            type="text"
            value={this.props.newComment.username}
            onChange={this.handleInputChange}
          />
          <textarea
            name="text"
            value={this.props.newComment.text}
            onChange={this.handleInputChange}
          />
          <select
            name="imageType"
            value={this.props.newComment.imageType}
            onChange={this.handleInputChange}
          >
            <option value="wavatar">wavatar</option>
            <option value="monsterid">monsterid</option>
            <option value="retro">retro</option>
          </select>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default observer(AddComment);
