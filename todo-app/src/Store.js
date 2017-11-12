import {extendObservable, computed, action, useStrict} from 'mobx';
import {createNewComment, fetchComments, removeComment, updateCommentWithValues} from './api';

useStrict(true);

export default class Store {
  // @observable editingCommentId = null;
  // @observable comments = [];

  constructor() {
    extendObservable(this, {
      comments: [],
      editingCommentId: null,
      newComment: {
        username: '',
        text: '',
        imageType: 'retro'
      },

      numberOfReadComments: computed(() => {
        return this.comments.filter(comment => !comment.read).length;
      }),
      setComments: action((comments) => {
        this.comments = comments;
      }),
      refreshComments: action(() => {
        fetchComments()
          .then(this.setComments.bind(this));
      }),
      removeComment: action((commentId) => {
        removeComment(commentId)
          .then(this.refreshComments.bind(this));
      }),
      addComment: action((updatedNewComment) => {
        createNewComment(updatedNewComment)
          .then(this.refreshComments.bind(this));
      }),
      updateComment: action((commentId, values) => {
        updateCommentWithValues(commentId, values)
          .then(this.refreshComments.bind(this));
      }),

      updateNewComment: action((propertyToUpdate, value) => {
        this.newComment[propertyToUpdate] = value;
      }),
      resetNewComment: action(() => {
        this.newComment = {
          username: '',
          text: '',
          imageType: 'retro'
        };
      }),

      editComment: action((commentId) => {
        this.editingCommentId = commentId;
      }),
      stopEditingComment: action(() => {
        this.editingCommentId = null;
      })
    });
  }
}
