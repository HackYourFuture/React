const url = 'https://jsonplaceholder.typicode.com/users';

export function API() {
  return fetch(url).then(result => result.json());
}
