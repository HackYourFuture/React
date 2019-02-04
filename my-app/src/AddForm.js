import React from 'react';
class AddForm extends React.Component {
  state = { add: false };
  handleAdd = () => {
    this.setState({ add: true });
  };
  handleCancel = () => {
    this.setState({ add: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    let newPost = {
      photoUrl: e.target.photoUrl.value,
      description: e.target.description.value,
    };
    this.props.addPost(newPost);
    e.target.reset();
    this.setState({ add: false });
  };
  render() {
    return !this.state.add ? (
      <input
        type="submit"
        value="Add Post"
        onClick={() => {
          this.handleAdd();
        }}
      />
    ) : (
      <form onSubmit={this.handleSubmit}>
        <label>Add new photo</label>
        <input type="text" name="photoUrl" />
        <label>Add your description</label>
        <input type="text" name="description" />
        <input type="submit" value="add" />
        <input type="button" value="Cancel" onClick={() => this.handleCancel()} />
      </form>
    );
  }
}
export default AddForm;
