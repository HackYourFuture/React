import React from 'react';
import Service from './service';

class AddCommentForm extends React.Component {
  state = {
    comment: this.props.comment,
  };
  handleSubmit = e => {
    e.preventDefault();
    Service.createComment({
      comment: [...this.state.comment, { text: e.target.comment.value, author: this.props.author }],
      id: this.props.id,
    }).then(comment => this.setState({ comment: comment.comment }));
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="comment" placeholder="Add your comment" />
        <input type="submit" value="add" />
      </form>
    );
  }
}
export default AddCommentForm;
