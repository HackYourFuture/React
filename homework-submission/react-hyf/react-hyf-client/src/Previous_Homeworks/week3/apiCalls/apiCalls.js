const url = 'https://uinames.com/api/?amount=10';
//'https://jsonplaceholder.typicode.com/users';

export function API() {
  return fetch(url).then(result => result.json());
}
