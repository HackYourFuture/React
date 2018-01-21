import { observable, computed, action, useStrict, runInAction} from 'mobx'

useStrict(true)

const fakeAuthor = {
  firstName: "Joost",
  lastName:  "Lubach",
  avatarURL: "https://pbs.twimg.com/profile_images/845196505279455233/IUV3v-jP_400x400.jpg"
};

export default class CommentsStore {

  @observable
  comments = [];

  @observable
  loadingComments = false  

  @action
  loadComments(showLoader = true) {

    if (showLoader) {
      this.loadingComments = true
    }

    // Use fetch to get data from the API
    fetch('https://hyf-react-api.herokuapp.com/blog/comments')
      .then(res => res.json()) // Promise #1
      .then(res => {           // Promise #2
        runInAction(() => {
          this.loadingComments = false
          this.comments = res
        })
      })
      .catch(error => {
        runInAction(() => {
          this.loadingComments = false
        })
      })

  }

  findComment(id) {
    return this.comments
      .find(comment => comment._id === id)
  }

  @computed
  get likeCount() {
    return this.comments
      .filter(comment => comment.isLiked)
      .length
  }

  @action
  addComment(text) {
    const comment = {
      author: fakeAuthor,
      isLiked: false,
      text: text
    };

    fetch('https://hyf-react-api.herokuapp.com/blog/comments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(res => res.json())
      .then(res => {

        // Option #2
        this.loadComments(false)

      })

  }

  removeComment(id) {
    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {

        // Option #2
        this.loadComments(false)

      })
  }

  @action
  toggleLiked(id) {

    const comment = this.findComment(id)

    if (!comment) {
      throw new Error('You are trying to modify a comment that does not exist.')
    }

    comment.isLiked = !comment.isLiked

    fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isLiked: comment.isLiked,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.loadComments(false)
      })
      .catch(() => {
        runInAction(() => {
          comment.isLiked = !comment.isLiked
        })
      })

  }

  @action
  updateComment(id, text) {
    const comment = this.findComment(id)
    if (comment == null) { return }

    comment.text = text;
  }

}