import { action, observable } from 'mobx'
import moment from 'moment'

// Data
import commentData from '../data/comments.json'

const addCommentFormDefault = {
  commentText: '',
  authorName: '',
  image: '',
}

class CommentsStore {

  @observable
  commentList = commentData

  @observable
  addCommentForm = addCommentFormDefault

  @observable
  commentEditingID = null

  @observable
  commentEditingText = ''

  @action
  toggleEdit = (id) => {
    this.commentEditingID = id
    this.commentEditingText = this.commentList.filter(comment => {
      return comment.id === id
    })[0].commentText
  }

  @action
  changeCommentEditingText = (event) => {
    this.commentEditingText = event.target.value
  }

  @action
  saveComment = () => {
    this.commentList = this.commentList.map(comment => {
      if (comment.id === this.commentEditingID) {
        comment.commentText = this.commentEditingText
      }
      return comment
    })
    this.cancelEditing()
  }

  @action
  cancelEditing = () => {
    this.commentEditingID = null
    this.commentEditingText = ''
  }

  @action
  changeCommentFormField = (event, field) => {
    this.addCommentForm[field] = event.target.value
  }

  @action
  toggleLike = commentId => {
    const newCommentList = this.commentList.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          isLiked: !comment.isLiked,
        }
      }
      return comment
    })
    this.commentList = newCommentList
  }

  @action
  createComment = () => {
    const ids = this.commentList.map(comment => comment.id)
    const newId = this.commentList.length > 0 ? Math.max(...ids) + 1 : 1
    const newComment = {
      ...this.addCommentForm,
      id: newId,
      createdAt: moment().format('YYYY-MM-DD')
    }
    this.commentList = [
      ...this.commentList,
      newComment,
    ]
    this.addCommentForm = addCommentFormDefault
  }

  @action
  deleteComment = (id) => {
    this.commentList = this.commentList.filter(comment => comment.id !== id)
  }

}

export default new CommentsStore()
