export default function fetchUsers() {
  return fetch('https://uinames.com/api/?amount=10').then(data => data.json());
}
