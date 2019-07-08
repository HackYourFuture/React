const url = 'https://reqres.in/api/users';

export function getUsers() {
  return fetch(url).then(data => data.json());
}
