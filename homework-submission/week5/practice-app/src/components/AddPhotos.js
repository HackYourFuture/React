import React from 'react';
import GetInfo from '../services/GetInfo';

class AddPhotos extends React.Component {
  state = {
    photoUrl: '',
    description: '',
    addMode: false,
  };

  onUserInput = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  onAddPhotos = () => {
    this.setState({ addMode: true });
  };
  onCancel = () => {
    this.setState({ addMode: false });
  };

  addNewPost = e => {
    GetInfo.addNewPost({
      photoUrl: this.state.photoUrl,
      description: this.state.description,
    })
      .then(newPost => {
        this.setState({ photoUrl: '', description: '' });
        this.props.addPost(newPost);
      })
      .catch(error => {
        this.setState({ status: 'error' });
        console.log(error);
      });
    e.preventDefault();
  };

  render() {
    return this.state.addMode ? (
      <div>
        <form onSubmit={this.addNewPost}>
          <input
            type="text"
            name="photoUrl"
            placeholder="URL"
            value={this.state.photoUrl}
            onChange={this.onUserInput}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.onUserInput}
          />
          <input type="submit" value="Add Post" />
          <input type="submit" value="Back" onClick={this.onCancel} />
        </form>
      </div>
    ) : (
      <div className="add-div">
        <label className="add-button">
          <input type="button" value="Add Photo's" onClick={this.onAddPhotos} />
        </label>
      </div>
    );
  }
}
export default AddPhotos;
