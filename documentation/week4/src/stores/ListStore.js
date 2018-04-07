import { action, observable } from 'mobx'
//Data
import data from '../data/todos.json';

const task_state = {
    discription: "",
    deadline: "",
    done: false,
}

class ListStore {

    @observable
    todoList = data

    @observable
    newTask = {
        discription: "",
        deadline: "",
        done: false,
    }

    @action

    toggleDone = id => {
        const newTodoList = this.todoList.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isLiked: !todo.isLiked,
                }
            }
            return todo
        });
       
        this.todoList = newTodoList;
    }

    @action

    createDiscription = (fields) => {
        this.newTask = {
            ...this.newTask,
            discription: fields.target.value
        }
    }
    @action

    createDeadline = (fields) => {
        this.newTask = {
            ...this.newTask,
            deadline: fields.target.value
        }
        // console.log(this.newTask.deadline)
        // console.log(this.newTask.discription)
    }
        
    @action
    addNewTask = (event, fields) => {
        event.preventDefault()
        // console.log(this.newTask.deadline)
        // console.log(this.newTask.discription)
        this.todoList = [
            ...this.todoList,
            this.newTask
        ]
    }

    @action 
     deleteTask = (id) => {
    this.todoList =
    this.todoList.filter(todo => todo.id !== id);
  }

}




export default new ListStore()