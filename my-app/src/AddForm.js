import React from 'react';
import Service from './service';
class AddForm extends React.Component {
  state = {
    add: false,
    author: '',
    status: 'done',
  };
  handleAdd = () => {
    this.setState({ add: true });
    this.props.SwitchAddMode();
  };
  handleCancel = () => {
    this.setState({ add: false });
    this.props.SwitchAddMode();
  };
  togglingToHomepage = () => {
    this.setState({ add: false });
    this.props.SwitchAddMode();
  };
  handleSubmit = e => {
    this.setState({ status: 'loading' });
    Service.createPost({
      photoUrl: e.target.photoUrl.value,
      author: this.props.author,
      description: e.target.description.value,
      comment: [
        {
          author: '',
          text: '',
        },
      ],
      like: [],
    })
      .then(newPost => {
        this.setState({ status: 'done' });
        this.props.addPost(newPost);
      })
      .catch(error => {
        this.setState({ status: 'error' });
      });
    this.props.SwitchAddMode();
    e.target.reset();
    this.setState({ add: false });
    e.preventDefault();
  };
  render() {
    return !this.state.add ? (
      <input
        className="adding-button"
        type="submit"
        value="Add Post"
        onClick={() => {
          this.handleAdd();
        }}
      />
    ) : (
      <div className="add-form">
        <img
          src="https://i.pinimg.com/originals/34/7d/89/347d89cf1fed09ebb25f3476b5b54fe3.jpg"
          alt="homepage-ph"
          onClick={() => this.togglingToHomepage()}
        />
        <form onSubmit={this.handleSubmit}>
          <label>Add new photo</label>
          <input type="text" name="photoUrl" />
          <label>Add your description</label>
          <input type="text" name="description" />
          <input type="submit" value="add" />
          <input type="button" value="Cancel" onClick={() => this.handleCancel()} />
        </form>
      </div>
    );
  }
}
export default AddForm;
