import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('commentsStore')
@observer
export default class AddCommentForm extends React.Component {

  render() {

    const {
      createComment,
      addCommentForm,
      changeCommentFormField,
    } = this.props.commentsStore

    const {
      commentText,
      authorName,
      image,
    } = addCommentForm

    return (
      <div className='add-comment-form'>
        <input
          type='text'
          placeholder='Your name'
          value={authorName}
          onChange={(e) => changeCommentFormField(e, 'authorName')}
        />
        <input
          type='text'
          placeholder='Your photo'
          value={image}
          onChange={(e) => changeCommentFormField(e, 'image')}
        />
        <textarea
          placeholder='Add a new comment'  
          onChange={(e) => changeCommentFormField(e, 'commentText')}
          value={commentText}
        />
        <button onClick={createComment}>Add comment</button>
      </div>
    )
  }
}