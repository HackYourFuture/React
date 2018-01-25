export function loadTodos() {
   if (localStorage.todos == null) { return [] }
    return (JSON.parse(localStorage.todos))
};
  
export function saveTodos(todos) {
    localStorage.todos = JSON.stringify(todos);
};