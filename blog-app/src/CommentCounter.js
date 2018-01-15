import React from 'react'
import {observer, inject} from 'mobx-react'

@inject('comments') @observer
export default class CommentCounter extends React.Component {

  render() {
    return (
      <div className='CommentCounter'>
        ♥ x{this.props.comments.likeCount}
      </div>
    )
  }

}