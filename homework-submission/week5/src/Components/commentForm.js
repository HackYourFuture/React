import React from 'react';
import PhotoServices from '../Services/photoServices';

export default class CommentForm extends React.Component {

  state = {
    comment: '',
    mode: -1
  }
  onChangeComment = (e) => {
    this.setState({ comment: e.target.value });
  }
  addComment = () => {
    const tempPhotoItem = this.props.photoItem;

    tempPhotoItem.comment.push({ author: this.props.author, text: this.state.comment });
    PhotoServices.update(tempPhotoItem).then(() => {
      this.setState({ comment: '' });
    }).catch((err) => console.log('Error', err))
  }
  onEdit = (e, indexComment) => {
    this.setState({
      comment: this.props.photoItem.comment[indexComment].text,
      mode: indexComment
    });
  }
  handleCommChange = (e) => {
    this.setState({ comment: e.target.value });
  }
  handleCommUpdate = (indexComment) => {
    const tempPhotoItem = this.props.photoItem;
    tempPhotoItem.comment[indexComment].text = this.state.comment;
    PhotoServices.update(tempPhotoItem).then(() => {
      this.setState({ comment: '', mode: -1 })
    }).catch((err) => { console.log('error: ', err) });
  }
  handleCommCancel = () => { this.setState({ comment: '', mode: -1 }); }
  onRemoveComment = (indexComment) => {
    const tempPhotoItem = this.props.photoItem;
    tempPhotoItem.comment.splice(indexComment, 1);
    PhotoServices.update(tempPhotoItem).then(() => {
      this.props.updateList(this.props.indexPhoto, this.props.photoItem);
    }).catch((err) => { console.log('error: ', err) });
  }
  render() {
    let commentListBlock;
    let commentControl;

    if (this.props.photoItem.comment.length > 0) {
      commentListBlock = this.props.photoItem.comment.map((comment, index) => {
        if (this.props.author === comment.author) {
          commentControl = <div>
            {(this.state.mode !== index) ?
              <button type='button' onClick={(e) => this.onEdit(e, index)}>Edit</button> :
              <div>
                <button type='text' onClick={() => this.handleCommUpdate(index)}>Update</button>
                <button type='text' onClick={this.handleCommCancel}>Cancel</button>
              </div>
            }
            <button type='button' onClick={() => this.onRemoveComment(index)}>Delete</button>
          </div>
        }
        return (
          <div key={index}>
            {(this.state.mode !== index) ?
              <h4>{comment.author}{'    '} {comment.text} {commentControl}</h4> :
              <div>
                <h4>{comment.author}</h4>
                <input type='text' value={this.state.comment} onChange={this.handleCommChange}></input>
                {commentControl}
              </div>
            }
          </div>
        )
      })
    }
    return (
      <div>
        <input type='text' value={this.state.comment} onChange={this.onChangeComment}></input>
        <button type='button' onClick={this.addComment}>Add Comment</button>
        {commentListBlock}
      </div>
    );
  }
}