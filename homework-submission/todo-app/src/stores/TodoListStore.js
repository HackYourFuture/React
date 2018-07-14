import {observable, action, computed, configure, runInAction} from "mobx";

configure({ enforceActions: true })

const url = "https://hyf-react-api.herokuapp.com";

class TodoListStore {
    @observable listItems = []; 

    @observable editing = null; 
    
    fetchAll = ()=>{
      fetch(`${url}/todos`)
      .then(response => response.json())
      .then(todos=>{
        runInAction(()=>{
          this.listItems = todos;    
        })
      })
      .catch(err=> console.log(err));
    }

    @action
    checkHandler = (item)=> {
      item.done = !item.done
      fetch(`${url}/todos/${item._id}`,{
        method:"PATCH",
        body: JSON.stringify({done : item.done}),
        headers:{'content-type':'application/json', }
      })
        .catch(err => console.log(err))
    }
    
    removeHandler = (item)=>{
      fetch(`${url}/todos/${item._id}`,{
        method:"DELETE",
        headers:{'content-type':'application/json'}
      })
        .then(res=> res.json())
        .then(elem=> {
          const newTodoItems = this.listItems.filter((e)=> e._id !== elem._id);
          runInAction(()=>
            {this.listItems = newTodoItems;})})
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
        .then(res=> res.json())
        .then(e=> 
          runInAction(()=>
            {this.listItems = [...this.listItems,e]}))
        .catch(err=>console.log(err));
    }

    @action
    editHandler = (item)=>{
      this.editing = item._id;
      }

    @action  
    cancelHandler = ()=>{
      this.editing = null;
      }

    saveHandler = (e,item)=>{
      e.preventDefault();
      const editTodo = {
        "id": item.id ,
        "description": e.target.description.value,
        "deadline": new Date(e.target.deadline.value),
        "done": false
      };
      fetch(`${url}/todos/${item._id}`,{
        method:"PATCH",
        body: JSON.stringify(editTodo),
        headers:{'content-type':'application/json', }
      })
        .then(res=> res.json())
        .then(elem =>
          runInAction(()=>{
            item.description = elem.description;
            item.deadline = elem.deadline;})) 
        .then (()=> runInAction(()=>{
          this.editing = null}))
        .catch(err => console.log(err))
    }

    @computed get todoCount() {
      return this.listItems.length;
    }
}

const TodoListInstance = new TodoListStore();

export default TodoListInstance;