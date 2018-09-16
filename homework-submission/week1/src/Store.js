import { observable, action, configure, runInAction} from "mobx";

configure({ enforceActions: "observed" });

class Store {
  @observable data = [];
  @observable state = 'loading';

  @action
  toggleTodo = async item => {
    this.state = "Loading";
    try {
      await fetch(`https://hyf-react-api.herokuapp.com/todos/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      });
      runInAction(() => {
        this.data = this.data.map(todo => {
          if (todo.id === item.id) {
            return {
              ...todo, done: !todo.done
            }
          }
          return todo
        })
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };

  @action
  addTodo = async e => {
    e.preventDefault();
    this.state = "Loading";
    const newTodo = {
      id: Math.random(),
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };

    try {
      await fetch(`https://hyf-react-api.herokuapp.com/todos/create`, {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      });
      runInAction(() => {
        this.data = [...this.data, newTodo];
        e.target.description.value = "";
        e.target.deadline.value = "";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };
    
  @action
  removeTodo = async id => {
    this.state = "Loading";
    try {
      await fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      });
      runInAction(() => {
        const newData = this.data.filter(item => item._id !== id);
        this.state = "Done";
        this.data = newData;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };

  @action async getTodos(){
    this.data = [];
    this.state = 'Loading';
    try {
      const todos = await this.getData();
      runInAction(()=>{
        this.state = 'Done';
        this.data = todos;
      })
     } catch (error){
        runInAction(() => {
          this.state = 'Error';
        })
      }
  }

  getData(){
    return fetch('https://hyf-react-api.herokuapp.com/todos')
    .then(response => response.json())
  }
}
export default new Store();
