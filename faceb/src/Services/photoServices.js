var url = "http://localhost:4000/photos";
export default class PhotoServices {
  static getPhotoList() {
    return fetch(url).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response;
      }
    });
  }
  static createPhoto(photoItem) {
    console.log("photoItem", photoItem);
    return fetch('http://localhost:4000/photos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(photoItem),
    })
      .then(response => {
        console.log(response.status);
        if (response.status === 201) {
          return response.json();
        } else {
          throw response.json();
        }
      })
  }

}