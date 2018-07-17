import { observable, action, configure } from "mobx";
import data from '../TodoList.json';
configure({ enforceActions: true })

class TodoStore {

    @observable
    TodosList = data;

    @action
    isDoneCheck = (id) => {
        const todoItem = this.TodosList.map((element) => {
            if (id === element.id) {
                return {
                    ...element,
                    done: !element.done
                }
            }
            return element;
        });
        this.TodosList = todoItem;
    }

    @action
    AddItems = (event) => {
        event.preventDefault();
        const NewTodo = {
            "id": this.TodosList.length + 1,
            "description": event.target.description.value,
            "deadline": event.target.deadline.value,
            "done": false
        }
        this.TodosList.push(NewTodo);
    }

    @action
    removeItems = (i) => {
        const NewTodo = this.TodosList.filter((element) => element.id !== i);
        this.TodosList = NewTodo;
    }
}
const TodoInstance = new TodoStore();
export default TodoInstance;