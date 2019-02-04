const url = 'https://hyf-react-api.herokuapp.com/blog/comments';

export default class BlogService {

  static getBlogs() {
    return fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw response;
        }
      })
  }
  static createNewBlog(newBlog) {
    console.log('New Blog: ' + JSON.stringify(newBlog));
    return fetch(url + '/create', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog)
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }
  static deleteBlog(id) {
    return fetch(url + `/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }

  static updateBlog(updateBlog) {
    let id = updateBlog._id;
    return fetch(url + `/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateBlog)
    }).then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw response.json();
      }
    })
  }
}