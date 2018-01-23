//import {loadTasks, saveTasks} from './localStorageUtils';
import {observable, computed , action , runInAction} from 'mobx';

const api_url = "https://hyf-react-api.herokuapp.com";

class TasksStore {

    @observable
    tasks = []

    @observable
    loadingTasks = false 

    findTask(taskId) {
        return this.tasks.find(task => task.id === taskId)
    }

    @action
    loadTasks(showLoader = true){
        if (showLoader) {
            this.loadingTasks = true
        }
        fetch(`${api_url}/todos`)
        .then(res =>{return res.json()})
        .then(tasks_arr => {
            runInAction(()=>{
                this.tasks = tasks_arr.map(comment => {
                    return {
                        id:comment._id , 
                        description:comment.description , 
                        deadline: comment.deadline , 
                        done:comment.done}
                });
                this.loadingTasks = false;
            });
        })
        .catch(error => {
            runInAction(() => {
              this.loadingTasks = false
        })
    })
    }

    @action
    addTask(taskText , taskDate) {
        const newTask =  {
          description: taskText,
          deadline:   taskDate,
          done:   false
        };
        fetch(`${api_url}/todos/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then(res => {
            this.loadTasks(false)
        })
        .catch(() => {
            throw new Error('Server error!')
        })
    }

    @action
    deleteTask(taskId) 
    {
        fetch(`${api_url}/todos/${taskId}`, {
            method: 'DELETE',
        })
        .then(res => {
            this.loadTasks(false)
        })
        .catch(() => {
            throw new Error('Server error!')
        })
    }

    @action
    updateTask(taskId, taskDescription , taskDate) {
        const task = this.findTask(taskId);
        if (task == null) {
            throw new Error('You are trying to modify a task that does not exist.')
        }
        task.description = taskDescription;
        task.deadline = taskDate;	

        fetch(`${api_url}/todos/${taskId}`, {
              method: 'PATCH',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                description: taskDescription,
                deadline: taskDate
            }),
          })
          .then(res => {
              //console.log(res);
              this.loadTasks(false)
          })
          .catch(() => {
            throw new Error('Server error!')
        })
    }
    
    @action
    changeDone(doneValue, taskId) {
        const task = this.findTask(taskId);
        if (task == null) { 
            throw new Error('You are trying to modify a task that does not exist.')
         }
         
        task.done = doneValue;

        fetch(`${api_url}/todos/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                done: doneValue,
            }),
        })
        .then(res => {
            this.loadTasks(false)
        })
        .catch(() => {
            runInAction(() => {
                task.done = !task.done
            })
        })
    }

    @computed
    get doneCount() {
            return this.tasks.filter(task => task.done).length;
    }
}

const tasksStore = new TasksStore();

export default tasksStore;