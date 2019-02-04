export default class GetInfo {
  static getMainInfo() {
    return fetch('http://localhost:4000/photos').then(response => this.checkStatusCode(response));
  }

  static addNewPost(data) {
    return fetch('http://localhost:4000/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
