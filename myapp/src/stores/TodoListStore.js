import { observable, action, computed, configure } from "mobx";
import todoListItem from "./../todoListItem.json";

configure({ enforceActions: true })


class TodoListStore {
    @observable listItems = todoListItem;

    @action
    handleChangeCheckBox = (id) => {
        const newTodoItems = this.listItems.map((element) => {
            if (id === element.id) {
                return {
                    ...element,
                    done: !element.done
                }
            }
            return element;
        });
        this.listItems = newTodoItems;

    }
    //    handleChangeCheckBox = (index) => {
    //     const item = [...this.listItems]
    //     item[index].done = !item[index].done
    //     this.listItems[index].done = !this.listItems[index].done;
    // }

    @action
    onDelete = (index) => {
        const todosList = [...this.listItems]
        todosList.splice(index, 1)
        this.listItems = todosList;
    }

    @action
    onAdd = (event) => {
        event.preventDefault();
        const newTodo = {
            "id": this.listItems.length + 1,
            "description": event.target.description.value,
            "deadline": event.target.deadline.value,
            "done": false
        }
        this.save(this.description, this.deadline, this.done, this.listItems.length)
        this.listItems.push(newTodo);
    }
    @action
    save = (description, deadline, index) => {
        const newToDo = { description, deadline }
        const toDos = [...this.listItems]
        toDos[index] = newToDo
        this.listItems = toDos
    }
    @computed get todoCount() {
        return this.listItems.length;
    }
}

const TodoListInstance = new TodoListStore();

export default TodoListInstance;