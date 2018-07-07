import {observable, action, computed, configure, runInAction} from "mobx";
//import Todolist from "../components/Todolist.json";

configure({ enforceActions: true })

const url = "https://hyf-react-api.herokuapp.com";

class TodoListStore {
    @observable listItems = []; 
    
    fetchAll = ()=>{
      fetch(`${url}/todos`)
      .then(response => response.json())
      .then(todos=>{
        console.log(todos);
        runInAction(()=>{
          this.listItems = todos;    
        })
      })
      .catch(err=> console.log(err));
    }

    @action
    checkHandler = (item)=> {
      item.done = !item.done; 
      fetch(`${url}/todos/${item._id}`,{
        method:"PATCH",
        body: JSON.stringify({done : item.done}),
        headers:{'content-type':'application/json'}
      })
      .catch(err => console.log(err))
      }
    
    removeHandler = (item)=>{
      fetch(`${url}/todos/${item._id}`,{
        method:"DELETE",
        headers:{'content-type':'application/json'}
      })
      .then(()=> this.fetchAll())
      .catch(err => console.log(err));
      }
    
    addHandler = (e)=>{
      e.preventDefault();
      const newTodo = {
          "id": this.listItems.length + 1 ,
          "description": e.target.description.value,
          "deadline": new Date(e.target.deadline.value),
          "done": false
        };
        fetch(`${url}/todos/create`, {
          method:"POST",
          body: JSON.stringify(newTodo),
          headers:{'content-type':'application/json'}          
        })
        .then(()=> this.fetchAll())
        .catch(err=>console.log(err));
    }

    @computed get todoCount() {
      return this.listItems.length;
    }
}

const TodoListInstance = new TodoListStore();

export default TodoListInstance;