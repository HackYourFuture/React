import { observable, action } from "mobx";
import todosList from "./../data/todos.json";

class TodosListStore {
  @observable listItems = todosList;
  @observable isEditing = false;

  @action
  onCheckboxChange = index => {
    console.log("hhhh");
    console.log(this.listItems);
    if (index >= 0) {
      this.listItems[index].done = !this.listItems[index].done;
    }
    console.log(this.listItems);
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
      let newTodo = {
        id: id,
        description: description,
        deadline: deadline,
        done: false
      };
      this.listItems.push(newTodo);
    } else {
      alert(
        "The deadline should be in this format DD-MM-YYYY \n And the Todo must be at least 1 character"
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
    // event.preventDefault();

    this.listItems[event.target.edit_description_input.id].description =
      event.target.edit_description_input.value;

    this.isEditing = false;
  };
}

const Store = new TodosListStore();

export default Store;
