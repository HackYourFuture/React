import {autorun, observable, action} from 'mobx';
import {loadTodoItems, saveTodoItems} from '../storage'


export default class TaskStore {
  constructor() {
    autorun(() => {
      saveTodoItems(this.todos);
    });
  }
    
    @observable
    todos = loadTodoItems();
    

    @action
    addTask(text){
        const ids = this.todos.map(task => task.id);
        const todo = {
            id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
            description: text,
            done: false
        }
       this.todos.push(todo);  
    }
    @action
      removeTask(id) {
      this.todos = this.todos.filter(task => task.id !== id)
  }
     @action
     toggleStatus(todoID) {
       const todo = this.todos.map(todoItem =>{
                if (todoItem.id === todoID){
                    todoItem.done = !todoItem.done
                }
                return todo
                
            })
    }

     @action
     handleSaveEdit(id , description){
       const todo = this.todos.map(todoItem => {
        if (todoItem.id === id){
                 todoItem.description = description
            }
           return todo
       })
};

   
}