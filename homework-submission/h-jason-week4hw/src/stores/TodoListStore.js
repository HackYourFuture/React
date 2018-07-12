import { observable, action } from "mobx";
import todosList from "./../data/todos.json";

class TodosListStore {
    @observable listItems = todosList;
    @observable isEditing = false;

    @action
    onCheckboxChange = index => {
        if (index >= 0) {
            this.listItems[index].done = !this.listItems[index].done;
        }
    };

    @action
    onSubmitForm = event => {
        event.preventDefault();

        let id = 0;
        if (this.listItems.length > 0) {
            id = this.listItems[this.listItems.length - 1].id + 1;
        }

        let deadline = event.target.deadline.value;
        let description = event.target.description.value;

        let match = deadline.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
        if (match && description.length > 0) {
            const newTodo = {
                id: id,
                description: description,
                deadline: deadline,
                done: false
            };
            this.listItems.push(newTodo);
        } else {
            alert(
                "The deadline should be in this format DD-MM-YYYY \n and please enter to-do item."
            );
        }
    };

    @action
    onRemoveItemButton = (index, event) => {
        event.preventDefault();
        this.listItems.splice(index, 1);
    };

    @action
    updateInputHandler = event => {

        const { id, value } = event.target.edit_description_input
        this.listItems[id].description = value;

        this.isEditing = false;
    };
}

const Store = new TodosListStore();

export default Store;