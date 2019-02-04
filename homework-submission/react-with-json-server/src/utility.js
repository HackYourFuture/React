

export default class Util {

  static fetchJSON(url) {
    return fetch(url)
      .then(res => res.json());
  }


  static postJSON(url, data) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => {
      return res.status < 400 ? res.json() : res;
    });
  }
}



/*
  static fetchJSON(url) {
    return fetch(url)
      .then(res => res.json());
  }


  static postJSON(url, data) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data
    }).then(res => {
      return res.status === 200 ? res.json() : res;
    });
  }
*/