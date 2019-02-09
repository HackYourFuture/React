import React from 'react';
import likeImg from './likeImg.png';
import EditingComment from './EditingComment';
import AddCommentForm from './AddCommentForm';

class MaximizePost extends React.Component {
  state = { comment: this.props.comment };
  editComment = newComment => {
    this.setState({ comment: newComment });
  };
  render() {
    let likers = this.props.post.like.map((element, index) => (
      <div key={index} className="like-in-max">
        <span className="liker">{element}</span>
        <img className="like-img" src={likeImg} alt="like" />
      </div>
    ));
    let comments = this.props.post.comment.map((element, index) => (
      <div className="comment-div" key={index}>
        <span className="user">{element.author}</span> <span />{' '}
        <span className="comment">{element.text}</span>
        {element.author === this.props.user ? (
          <EditingComment
            index={index}
            post={this.props.post}
            author={this.props.user}
            editComment={this.props.editComment}
          />
        ) : null}
      </div>
    ));

    return (
      <div>
        <p>{this.props.post.description}</p>
        <img className="maxPho" src={this.props.post.photoUrl} alt="URL-pho" />
        <AddCommentForm
          author={this.props.user}
          id={this.props.post.id}
          comment={this.props.post.comment}
        />
        {comments}
        {likers.length > 0 ? likers : null}
      </div>
    );
  }
}
export default MaximizePost;
