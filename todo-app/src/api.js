const BASE_URL = 'http://localhost:3001/comments';
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function fetchComments() {
  return fetch(BASE_URL, {
    headers: HEADERS,
  })
    .then(response => response.json());
}

export function updateCommentWithValues(commentId, values) {
  return fetch(`${BASE_URL}/${commentId}`, {
    headers: HEADERS,
    method: 'PUT',
    body: JSON.stringify(values)
  })
    .then(response => response.json());
}

export function createNewComment(newComment) {
  return fetch(BASE_URL, {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify(newComment)
  })
    .then(response => response.json());
}

export function removeComment(commentId) {
  return fetch(`${BASE_URL}/${commentId}`, {
    headers: HEADERS,
    method: 'DELETE',
  });
}
