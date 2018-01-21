import React from 'react';
import {inject, observer} from 'mobx-react';
import Comment from './Comment';

@inject('comments') @observer
export default class CommentList extends React.Component {

  state = {
    editingCommentID: null
  };

  componentDidMount = () => {
    this.props.comments.loadComments()
  };

  handleCommentStartEdit = id => {
    this.setState({editingCommentID: id});
  };

  handleCommentStopEdit = () => {
    this.setState({editingCommentID: null});
  };

  render() {
    return (
      <div className="CommentList">
        {this.renderList()}
      </div>
    )
  }

  renderList() {
    const { comments, loadingComments } = this.props.comments

    if (loadingComments) {
      return (
        <iframe title="loader" src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
      )
    }

    return (
      <ul>
        {comments.map((comment, index) => (
          <React.Fragment key={comment._id}>
            {index > 0 && <li className="CommentList-separator"/>}
            <Comment 
              id={comment._id}
              isEditing={comment._id === this.state.editingCommentID}
              onStartEdit={this.handleCommentStartEdit}
              onStopEdit={this.handleCommentStopEdit}
            />
          </React.Fragment>
        ))}
      </ul>
    )
  }

}