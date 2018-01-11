export function loadTasks() {
  if (localStorage.tasks === undefined) { return [] }
  return JSON.parse(localStorage.tasks)
}

export function saveTasks(tasks) {
  localStorage.tasks = JSON.stringify(tasks);

}