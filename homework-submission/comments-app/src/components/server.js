class Server {

  static getComments() {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments`)
      .then(response => this.checkStatusCode(response));
  }

  static addComment(newComment) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newComment)
    }).then(response => this.checkStatusCode(response));
  }

  static UpdateComment(id, updatedComment) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedComment)
    }).then(response => this.checkStatusCode(response));
  }

  static deleteComment(id) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: "DELETE",
    }).then(response => this.checkStatusCode(response));
  }

  static checkStatusCode(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw response.json();
    }
  }
}

export default Server;
