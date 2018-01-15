import {observable, computed, autorun, action} from 'mobx'
import Moment from 'moment'
import {saveComments, loadComments} from '../storage'

const fakeAuthor = {
  firstName: "Joost",
  lastName:  "Lubach",
  avatarURL: "https://pbs.twimg.com/profile_images/845196505279455233/IUV3v-jP_400x400.jpg"
};

export default class CommentsStore {

  constructor() {
    autorun(() => {
      saveComments(this.comments);
    });
  }

  @observable
  comments = loadComments();

  findComment(id) {
    return this.comments
      .find(comment => comment.id === id)
  }

  @computed
  get likeCount() {
    return this.comments
      .filter(comment => comment.isLiked)
      .length
  }

  @action
  addComment(text) {
    const ids = this.comments.map(comment => comment.id);
    const comment = {
      id:      ids.length === 0 ? 1 : Math.max(...ids) + 1,
      author:  fakeAuthor,
      isLiked: false,
      date:    Moment().format('YYYY-MM-DD'),
      text:    text
    };

    this.comments.push(comment);
  }

  @action
  removeComment(id) {
    this.comments = this.comments
      .filter(comment => comment.id !== id)
  }

  @action
  toggleLiked(id) {
    const comment = this.findComment(id)
    if (comment == null) { return }

    comment.isLiked = !comment.isLiked
  }

  @action
  updateComment(id, text) {
    const comment = this.findComment(id)
    if (comment == null) { return }

    comment.text = text;
  }

}