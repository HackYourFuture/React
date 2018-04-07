import { observable, action } from 'mobx'
import data from '../todo.json'
import moment from 'moment'


class TodoList {


    @observable
    tasksData = data

    
    @action    
    deletingTask = (index) => {
        console.log("deleting")
        const mineTasks = this.tasksData
        const newMineTasks = mineTasks.splice(index, 1)
        return newMineTasks
        
    }
    @action
    checkingBox = (index) => {
        const mineTasks = this.tasksData
        mineTasks[index].done = !mineTasks[index].done;
        return mineTasks
    }
    @action
    addingNewTask = (text, date) => { 
        const newTask = {
            "id": moment().toString(),
            "description": text,
            "deadline": date,
            "done": false
        }
        console.log(this.tasksData)
        
          this.tasksData = [
             ...this.tasksData,
                newTask]
    
    }
}

export default new TodoList()