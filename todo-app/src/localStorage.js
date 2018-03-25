<<<<<<< HEAD
export const loadFromLocalStorage = data => {

    return JSON.parse(localStorage.getItem('todoItems'))

}

export const saveToLocalStorage = data => {

    return localStorage.setItem('todoItems', JSON.stringify(data))

=======
export const loadFromLocalStorage = data => {

    return JSON.parse(localStorage.getItem('todoItems'))

}

export const saveToLocalStorage = data => {

    return localStorage.setItem('todoItems', JSON.stringify(data))

>>>>>>> 859297d475b9ef92c6eeab7d5cb4cba98c6cc573
}