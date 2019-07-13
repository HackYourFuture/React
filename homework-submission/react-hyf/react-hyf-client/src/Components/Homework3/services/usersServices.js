const url = 'https://uinames.com/api/?amount=10';

/**
 * Function to fetch the data of the list of users from the `url`
 */
export function getUsers() {
  return fetch(url).then(response => response.json());
}
