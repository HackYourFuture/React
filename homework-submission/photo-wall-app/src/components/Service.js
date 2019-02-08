class Service {
  static getPosts() {
    return fetch(`http://localhost:4000/photos/`).then(response =>
      this.checkStatusCode(response)
    );
  }

  static addPost(newPost) {
    return fetch(`http://localhost:4000/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    }).then(response => this.checkStatusCode(response));
  }

  static updatePost(id, updatedItem) {
    return fetch(`http://localhost:4000/photos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedItem)
    }).then(response => this.checkStatusCode(response));
  }
  static deletePost(id) {
    return fetch(`http://localhost:4000/photos/${id}`, {
      method: "DELETE"
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
export default Service;
