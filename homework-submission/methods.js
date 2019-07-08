function readFile(path) {
  return fetch(path);
}

function classChanger(event) {
  event.target.className === ''
    ? (event.target.className = 'strike_through')
    : (event.target.className = '');
}
