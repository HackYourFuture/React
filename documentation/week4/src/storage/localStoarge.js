export const loadFromLocalStorage = data => {


   return JSON.parse(localStorage.getItem('todo_items'))
   

}




export const saveToLocalStorage = data => {

    return localStorage.setItem('todo_items', JSON.stringify(data));


}