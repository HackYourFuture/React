export const LoadFromLocalStorage = data => {

    return JSON.parse(localStorage.getItem('todoItems'))

}

export const SaveToLocalStorage = data => {

    return localStorage.setItem('todoItems', JSON.stringify(data))

}