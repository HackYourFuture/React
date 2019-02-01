export default class GetInfo {
  static getMainInfo() {
    return fetch('https://hyf-react-api.herokuapp.com/blog/comments').then(response =>
      this.checkStatusCode(response),
    );
  }

  static deleteItem(id) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'DELETE',
    }).then(response => this.checkStatusCode(response));
  }

  static createNewItem(data) {
    return fetch('https://hyf-react-api.herokuapp.com/blog/comments/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => this.checkStatusCode(response));
  }

  static checkLiked(id, data) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => this.checkStatusCode(response));
  }

  static updateItem(id, data) {
    return fetch(`https://hyf-react-api.herokuapp.com/blog/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
