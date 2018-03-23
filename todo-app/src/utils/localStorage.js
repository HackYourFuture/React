export const loadFromLocalStorage = data => {
    return JSON.parse(localStorage.getItem("todo list"))
}
export const saveToLocalStorage = (data) => {
    return localStorage.setItem("todo list", JSON.stringify(data))
}