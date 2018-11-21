import { observable, computed, action, runInAction } from "mobx";

const Parent_API = "https://hyf-react-api.herokuapp.com";


class TodosStore {
  @observable Todos = {
    data: [],
    status: "loading..."
  };

  // @action addTodo = (newTodo) => {
  //     this.Todos.push(newTodo);
  // };

  @action createTodo(todo) {
    this.createNewTodo.status = "loading...";
    this.createNewTodo(todo)
      .then(todo => {
        runInAction(() => {
          this.Todos.data.push(todo);
          this.Todos.status = "done";
        });
      })
      .catch(error => {
        runInAction(() => {
          this.Todos.status = "error";
        });
      });
  }

  @action async addTodos() {
    this.Todos.data = [];
    this.addTodos.status = "loading...";

    try {
      const addedTodo = await this.getTodos();
      runInAction(() => {
        this.Todos.data = addedTodo;
        this.Todos.status = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.Todos.status = "error";
      });
    }
  }

  
    
//   @action removeTodo = (id) => {
//       this.Todos.data.splice(id, 1);
//   };
    

  @action isDone = todo => {
    todo.done = !todo.done;
  };

  @computed get numberOfTodos() {
    return this.Todos.data.length;
  }

  getTodos() {
    return fetch(`${Parent_API}/todos`).then(response => response.json());
  }


  createNewTodo(todo) {
    return fetch(`${Parent_API}/todos/create`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  }
}

const store = new TodosStore();
export default store;