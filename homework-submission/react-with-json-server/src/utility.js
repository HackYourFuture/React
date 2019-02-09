

export default class Util {

  static fetchJSON(url) {
    return fetch(url)
      .then(res => res.json());
  }

  static postJSON(url, method, data) {
    return fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => {
      return res.status < 400 ? res.json() : res;
    });
  }

  static deleteJSON(url) {
    return fetch(url, { method: "DELETE" }).then(res => {
      return res.status < 400 ? res.json() : res;
    });
  }

}