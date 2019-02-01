import React from 'react';
import getMainInfo from '../services/GetMainInfo';

class AddForm extends React.Component {
  state = {
    text: '',
    isLiked: true,
    author: {
      firstName: '',
      lastName: '',
      avatarURL: 'http://www.europe-together.eu/wp-content/themes/sd/images/user-placeholder.svg',
    },
  };

  addText = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  addAuthor = e => {
    let { author } = this.state;
    let name = e.target.name;
    author[name] = e.target.value;
    this.setState({ author });
  };

  onItemAdd = e => {
    this.setState({ status: 'loading' });
    getMainInfo
      .createNewItem({
        author: this.state.author,
        text: this.state.text,
        date: Date().trim(),
        isLiked: this.state.isLiked,
      })
      .then(item => {
        this.setState({ text: '', author: {} });
        this.props.onItemAdd(item);
      })
      .catch(error => {
        this.setState({ status: 'error' });
      });
    e.preventDefault();
    e.target.reset();
  };

  render() {
    return (
      <div className="main-form">
        <form onSubmit={this.onItemAdd}>
          <input
            className="input"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.addAuthor}
            placeholder="First name"
          />
          <input
            className="input"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.addAuthor}
            placeholder="Last name"
          />
          <input
            className="input"
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.addText}
            placeholder="Text"
          />

          <input className="button" type="submit" value={'Add Item'} />
        </form>
      </div>
    );
  }
}

export default AddForm;
