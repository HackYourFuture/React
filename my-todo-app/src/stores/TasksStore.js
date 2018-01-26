import {
     observable,
     computed,
     action,
     runInAction
} from 'mobx';

//'https://hyf-react-api.herokuapp.com';

class TasksStore {
     @observable tasks = []
     @observable editingId = null

     findTask(id) {
        return this.tasks.find(task => task.id === id);
     }

     @action EditTask(id) {
          this.editingId = id;
     }
     @action loadTasks() {
          fetch('https://hyf-react-api.herokuapp.com/todos')
               .then(res => res.json())
               .then(tasksArr => {
                    runInAction(() => {
                         this.tasks = tasksArr.map(comment => {
                              return {
                                   id: comment._id,
                                   ...comment
                              }
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

     @action addTask(text, date) {
          let newTask = {
               description: text,
               deadline: date,
               done: false
          };
          fetch('https://hyf-react-api.herokuapp.com/todos/create', {
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
     @action deleteTask(id) {
          let api = 'https://hyf-react-api.herokuapp.com/todos/' + id;
          fetch(api, {
                    method: 'DELETE',
               })
               .then(res => {
                    this.loadTasks(false)
               })
               .catch(() => {
                    throw new Error('Server error!')
               })
     }
     @action updateTask(id, description, date) {
          let task = this.tasks.find(task => task.id === id)
          if (task == null) {
               throw new Error('Task does not exist')
          }
          task.description = description;
          task.deadline = date;
          let api = 'https://hyf-react-api.herokuapp.com/todos/' + id;
          fetch(api, {
                    method: 'PATCH',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         description: description,
                         deadline: date
                    }),
               })
               .then(res => {
                    this.loadTasks(false)
               })
               .catch(() => {
                    throw new Error('Server error!')
               })
     }

     @action changeDone(done, id) {
          let task = this.tasks.find(task => task.id === id)
          if (task == null) {
               throw new Error('Task does not exist')
          }

          task.done = done;
          let api = 'https://hyf-react-api.herokuapp.com/todos/' + id;
          fetch(api, {
                    method: 'PATCH',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         done: done,
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

     @computed get Count() {
          return this.tasks.length;
     }
}

const tasks = new TasksStore();
export default tasks;
