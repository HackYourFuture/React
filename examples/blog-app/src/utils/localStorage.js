export const loadFromLocalStorage = () => {

  return JSON.parse(localStorage.getItem('blog_comments'));

};

export const saveToLocalStorage = data => {

  return localStorage.setItem('blog_comments', JSON.stringify(data));

};
