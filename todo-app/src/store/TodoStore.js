import { observable, action, useStrict, runInAction } from "mobx";

const BASE_URL = "https://hyf-react-api.herokuapp.com/todos/";

useStrict(true);
// will throw an error if you didn't use the @action or didn't use any decorator

export default class TodoStore {
  @observable todos = [];

  @observable loading = false;

  @observable isEditing = null;

  @action
  handleToggleEditOnItem = (id, cancel) => {
    if (cancel) {
      this.isEditing = null;
      return;
    }
    this.isEditing = id;
  };

  @action // maybe done
  loadTodos = (showLoading = true) => {
    if (showLoading) {
      this.loading = true;
    }

    fetch(BASE_URL)
      .then(res => res.json())
      .then(res => {
        runInAction(() => {
          this.todos = res;
          this.loading = false;
        });
      });
  };

  @action // done
  handleRemove = id => {
    const index = this.todos.findIndex(item => item._id === id);
    console.log("index", index);
    this.todos.splice(index, 1);

    fetch(BASE_URL + id, {
      method: "DELETE"
    })
      .then(res => {
        this.loadTodos(false);
      })
      .catch(err => console.log(err));
  };

  @action // done maybe
  addTodoItem = (description, deadline) => {
    const newTodo = {
      description,
      deadline,
      done: false
    };
    fetch(BASE_URL + "create", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })
      .then(res => {
        this.loadTodos(false);
      })
      .catch(err => console.log(err));
  };

  @action // done maybe
  handleToggleDone = id => {
    const todoIndex = this.todos.findIndex(item => item._id === id);
    const doneState = !this.todos[todoIndex].done;
    this.todos[todoIndex].done = doneState;
    const sentData = { done: doneState };

    fetch(BASE_URL + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sentData)
    })
      .then(res => {
        this.loadTodos(false);
      })
      .catch(err => console.log("err", err));
  };

  @action //
  handleUpdateItem = (id, description, deadline) => {
    const todoIndex = this.todos.findIndex(item => item._id === id);
    const toSendData = {
      description,
      deadline
    };
    this.todos[todoIndex].descrition = description;
    this.todos[todoIndex].deadline = deadline;

    fetch(BASE_URL + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(toSendData)
    })
      .then(res => this.loadTodos(false))
      .catch(err => console.log(err));
  };
}

/////////////////////////Notes in the lesson
/*
 -  initialization stuff if it has to do with fetching data (asynchronious) have to be in the constructor
    because it would be returning not data but a Promise which has to be handled before assigning it to the attribute on the class (state) 
    Alternative approach is to use the ComponentDidMount in the going-to-use-this-state component. There you can cause side-effect
 
 -  Performance is the last thing that you should worry about in a react environment, the most important thing is having consistancy in your data
    Build first optimize later and you can measure if you have performance issues  
 -  PATH is for partial update and PUT
*/
