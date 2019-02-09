export default class PostService {
  static getPostList() {
    return fetch('http://localhost:3000/photos').then(response => this.checkStatusCode(response));
  }

  static createPost(data) {
    return fetch('http://localhost:3000/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => this.checkStatusCode(response));
  }
  static createComment(post, i) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment: post.comment }),
    }).then(response => this.checkStatusCode(response));
  }

  static updateComment(post) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment: post.comment }),
    }).then(response => this.checkStatusCode(response));
  }

  static liker(post) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ like: post.like }),
    }).then(response => this.checkStatusCode(response));
  }

  static delete(post, i) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'DELETE',
    }).then(response => this.checkStatusCode(response));
  }

  static editingDescription(post) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: post.description }),
    }).then(response => this.checkStatusCode(response));
  }

  static deleteComment(post, i) {
    return fetch(`http://localhost:3000/photos/${post.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment: post.comment }),
    }).then(response => this.checkStatusCode(response));
  }

  static checkStatusCode(response) {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw response.json();
    }
  }
}
