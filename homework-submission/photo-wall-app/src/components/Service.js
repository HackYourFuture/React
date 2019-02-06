class Service {

  static getPosts() {
    return fetch(`http://localhost:4001/photos`)
      .then(response => this.checkStatusCode(response));
  }

  static addPost(newPost) {
    return fetch(`http://localhost:4001/photos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    }
    ).then(response => this.checkStatusCode(response));
  }

  static checkStatusCode(response) {
    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw response.json();
    }
  }
}
export default Service;