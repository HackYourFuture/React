export default class Util {


  static fetchList(url) {
    return fetch(url)
      .then(res => {
        if (res.status === 200) return res.json();
        throw res.statusText;
      });
  }
  static createItem(url, newItem) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    }).then(res => {
      if (res.status === 200) return res.json();
      throw res.statusText;
    })
  }
  static updateItem(url, item) {
    return fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(res => {
      if (res.status === 200) return res.json();
      throw res.statusText;
    });
  }
  static deleteItem(url) {
    return fetch(url, {
      method: "DELETE",
      headers: { "Comtent-type": "application/json" }
    }).then(res => {
      if (res.status === 200) return res.json();
      throw res.statusText;
    });
  }


}