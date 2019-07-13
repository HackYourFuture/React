const url = 'https://uinames.com/api/?amount=10';

export function getUsers() {
  return fetch(url).then(data => data.json());
}
