export default class CommentsServices {
  static getComments() {
    return fetch('https://hyf-react-api.herokuapp.com/blog/comments')
      .then(response => response.json())
  }

  static PostComment(data) {
    return fetch('https://hyf-react-api.herokuapp.com/blog/comments/create', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json())
  }

  static deleteComment(id) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: "DELETE"
    })
  }

  static editComment(id, data) {
    return fetch(`https:/hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json());
  }
}