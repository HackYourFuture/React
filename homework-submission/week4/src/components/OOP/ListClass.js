import { observable, action, computed, configure} from "mobx";
import List from '../../todo-list-data.json';


configure({
    enforceActions: true
})

class ListClass {

    @observable
    Data = List;

    @action
    checkStatus = (id) => {
        const newList = this.Data.map((element) => {
            if (id === element.id) {
                return {
                    ...element,
                    done: !element.done
                }
            }
            return element;
        });
        this.Data = newList;
    }

    @action
    addTodo = (e) => {
        e.preventDefault();
        const newList = {
            "id": this.Data.length + 1,
            "description": e.target.description.value,
            "deadline": e.target.deadline.value,
            "done": false
        }

        this.Data = newList;
    }

    @action
    removeTodo = (id) => {

        const newTodoItems = this.Data.filter((element) => element.id !== id);
        this.Data = newTodoItems;
    }
}

const TodoListInstance = new ListClass();
export default TodoListInstance;