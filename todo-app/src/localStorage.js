export const loadFromLocalStorage = data => {

    return JSON.parse(localStorage.getItem('todoItems'))

}

export const saveToLocalStorage = data => {

    return localStorage.setItem('todoItems', JSON.stringify(data))

}