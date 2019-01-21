import React from 'react';

class Comments extends React.Component {
  state = {
    name: '',
    comment: '',
  };

  onValueChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  onFormSubmit = e => {
    this.props.onSubmitForm(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <br />
        <form onSubmit={this.onFormSubmit}>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.onValueChange} />
          </label>
          <br />
          <br />
          <label>
            Comment:
            <input
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.onValueChange}
            />
          </label>
          <input value="submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default Comments;
