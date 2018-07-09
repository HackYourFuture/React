import {observable, action, computed, configure} from "mobx";
import Todolist from "../components/Todolist.json";

configure({ enforceActions: true })

class TodoListStore {
    @observable listItems = Todolist;
    
    @action
    checkHandler = (item)=> {
        item.done = !item.done;
      }

    @action
    removeHandler = (item)=>{
        const newTodoItems = this.listItems.filter((elem)=> elem !== item);
        this.listItems = newTodoItems;
      }

    @action
    addHandler = (e)=>{
      e.preventDefault();
      const newTodo = {
          "id": this.listItems.length + 1 ,
          "description": e.target.description.value,
          "deadline": e.target.deadline.value,
          "done": false
        }
        this.listItems.push(newTodo);
        console.log(this.listItems);
    }

    @computed get todoCount() {
      return this.listItems.length;
    }
}

const TodoListInstance = new TodoListStore();

export default TodoListInstance;