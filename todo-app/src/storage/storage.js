export function loadTodos() {
  if (localStorage.todos == null) {
    return [];
  }

  return JSON.parse(localStorage.todos);
}

export function setTodos(todos) {
  localStorage.todos = JSON.stringify(todos);
}
