import React from 'react';

export default class AddingForm extends React.Component {

  state = { showFrom: false };
  addBtn = <button onClick={() => this.setState({ showFrom: true })}> Add a photo</button >;

  handleSubmit = (e) => {
    e.preventDefault();
    let newPost = {
      photoUrl: e.target.url.value.toLowerCase(),
      author: this.props.userName,
      description: e.target.description.value,
      comment: [],
      like: []
    }
    this.props.onAdd(newPost);
    e.target.reset()
  }

  showForm = () => {
    return (
      <form onSubmit={this.handleSubmit} className="adding-form">
        <label>Photo URL</label>
        <input type="text" name="url" required />
        <label>Description</label>
        <input type="text" name="description" required />
        <input type="submit" value="Add" className="add-btn" />
      </form>
    );
  }

  render() {
    return (
      <div id="header">
        <h1 onClick={() => this.setState({ showFrom: false })}>Photo Wall</h1>
        {this.state.showFrom ? this.showForm() : this.addBtn}
      </div>
    );
  }
}
