export function loadTodoItems() {
    if (localStorage.todos == null) { return [] }
    return JSON.parse(localStorage.todos)
}

export function saveTodoItems(todos) {
    localStorage.todos = JSON.stringify(todos);
}