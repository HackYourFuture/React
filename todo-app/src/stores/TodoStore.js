import {observable, action, useStrict, runInAction} from 'mobx'
import Moment from 'moment'


useStrict(true)

export default class TodoStore{

    constructor(){
      this.loadTodos();   // without constructor it won't work, you need to use componentDidMount
    }

    @observable
    todos = [];

    @action
    loadTodos(){

      fetch("https://hyf-react-api.herokuapp.com/todos")
        .then(response => response.json())
        .then(response => {
          // this.setTodos(response)    // if you wanna make the @action tiny [using the function below]
          console.log("LOAD TODOS : ", response);
          runInAction(() => {
            this.todos = response
          })
        })
        .catch(error => {
          runInAction(() => {
            console.log(error)
          })
        })
    }

    // @action
    // setTodos(todos) {
    //   this.todos = todos
    // }

    @action  // add a todo item
    addTodo(text){
        
      const fourDaysForward = new Moment().add(4, 'day');
      const todo = {
        description: text,
        deadline: fourDaysForward.format('YYYY-MM-DD'),
        done: false
      }

      fetch('https://hyf-react-api.herokuapp.com/todos/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo), 
      })
        .then(response => response.json())
        .then(response => {
          console.log("POST RESPONSE   :", response)
          this.loadTodos();
        })  
    }

    @action // change status of a todo
    todoStatus(todoID){

      const todo = this.todos.find(todo => todo._id === todoID)
      if(todo === null) {
          throw new Error("No items..."); 
      }

      todo.done = !todo.done

      fetch(`https://hyf-react-api.herokuapp.com/todos/${todoID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo), 
      })
        .then(response => response.json())
        .then(response => {
          console.log("PATCH RESPONSE   :", response)
          this.loadTodos();
        })  
    }

    @action  // delete a todo item
    deleteTodo(todoID){

      const updatedTodos = this.todos.filter((val) =>{
                             return val._id !== todoID;
                           })

      this.todos = updatedTodos;
      
      fetch(`https://hyf-react-api.herokuapp.com/todos/${todoID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTodos), 
      })
        .then(response => response.json())
        .then(response => {
          console.log("DELETE RESPONSE  :", response)
          this.loadTodos();
        })  
    }

}