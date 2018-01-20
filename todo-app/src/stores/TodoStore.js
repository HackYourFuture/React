import {observable, action} from 'mobx'


export default class TodoStore{

    @observable
    todos = [
        {
          "id": 1,
          "description": "Get out of bed",
          "deadline": "2017-09-11",
          "done": true
        },
        {
          "id": 2,
          "description": "Brush teeth",
          "deadline": "2017-09-10",
          "done": false
        },
        {
          "id": 3,
          "description": "Eat breakfast",
          "deadline": "2017-09-09",
          "done": false
        }
    ]

    @action
    addTodo(text){

      const ids = this.todos.map(todo => todo.id)
      const todo = {
        "id": ids.length === 0 ? 1 : Math.max(...ids) + 1,
        "description": text,
        "deadline": "2018-01-11",
        "done": false
      }

      this.todos.push(todo);
    }

    @action
    onDone(todoID){

      const todo = this.todos.find(todo => todo.id === todoID)
      if(todo == null) {return}

      todo.done = !todo.done
    }

    @action
    onDelete(todoID){

      var updatedTodos = this.todos.filter((val,index) =>{
      return val.id !== todoID;
      })

      this.todos = updatedTodos; 
    }

}