export function loadComments() {
  if (localStorage.comments == null) { return [] }
  return JSON.parse(localStorage.comments)
}

export function saveComments(comments) {
  localStorage.comments = JSON.stringify(comments);
}