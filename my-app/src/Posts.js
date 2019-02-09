import React from 'react';
import Like from './Like';
import DeletePost from './DeletePost';
import UpdateDescriptionForm from './UpdateDescriptionForm';

class Posts extends React.Component {
  state = {
    editDes: false,
    comment: this.props.post.comment,
  };

  handleMaximizePost = maxPost => {
    this.props.handleMaximizePost(maxPost);
  };

  handleClickDescription = () => {
    this.setState({ editDes: true });
  };
  editDescription = () => {
    this.setState({ editDes: false });
  };
  x = () => {
    this.props.x(this.state.comment);
  };

  editComment = () => {};
  render() {
    return (
      <div className="mean">
        <div className="posts">
          {this.props.post.author.includes(this.props.author) ? (
            <DeletePost
              data={this.props.data}
              id={this.props.post.id}
              index={this.props.index}
              deletePost={this.props.deletePost}
            />
          ) : null}
          {this.state.editDes ? (
            <UpdateDescriptionForm
              id={this.props.post.id}
              description={this.props.post.description}
              editDescription={this.editDescription}
            />
          ) : (
            <p>{this.props.post.description}</p>
          )}
          {this.props.post.author.includes(this.props.author) ? (
            <input type="button" value="edit" onClick={() => this.handleClickDescription()} />
          ) : null}
          <img
            src={this.props.post.photoUrl}
            alt="URL pho"
            onClick={() => {
              this.handleMaximizePost(this.props.post);
            }}
          />
          <input
            type="button"
            value={
              this.props.post.comment.length ? this.props.post.comment.length - 1 + ' comment' : 0
            }
          />
          <Like
            liker={this.props.author}
            like={this.props.post.like}
            id={this.props.post.id}
            handleLike={this.props.handleLike}
            index={this.props.index}
          />
        </div>
      </div>
    );
  }
}
export default Posts;
