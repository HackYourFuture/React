import {loadTasks, saveTasks} from './localStorageUtils';
import {observable, computed, autorun, action} from 'mobx'

class TasksStore {

    @observable
    tasks = loadTasks();

    constructor() {
        autorun(() => {
            saveTasks(this.tasks);
        });
    }

    findTask(taskId) {
        return this.tasks.find(task => task.id === taskId)
    }

    @action
    addTask(taskText , taskDate) {
        const ids = this.tasks.map(task => task.id);
        const newTask =  {
          id:     ids.length === 0 ? 1 : Math.max(...ids) + 1,
          description: taskText,
          deadline:   taskDate,
          done:   false
        };
        this.tasks.push(newTask);
    }

    @action
    deleteTask(taskId) 
    {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    @action
    updateTask(taskId, taskDescription , taskDate) {
        const task = this.findTask(taskId);
        if (task == null) { return }
        task.description = taskDescription;
        task.deadline = taskDate;	
    }
    
    @action
    changeDone(doneValue, taskId) {
        const task = this.findTask(taskId);
        if (task == null) { return }
        task.done = doneValue;
    }

    @computed
    get doneCount() {
            return this.tasks.filter(task => task.done).length;
    }
}

const tasksStore = new TasksStore();

export default tasksStore;