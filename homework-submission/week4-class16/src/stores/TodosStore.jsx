import { observable, computed, action } from "mobx";
import Data from "../Data.json";
import { configure } from "mobx";
configure({ enforceActions: true });

class TodosStore {
  @observable
  edit = false;
  @observable
  Data = Data;

  @action
  handleCheck = todoId => {
    const newData = this.Data.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.Data = newData;
  };
  @action
  handleDelete = todoId => {
    const filteredTodos = this.Data.filter(todo => {
      return todo.id !== todoId;
    });

    this.Data.replace(filteredTodos);
  };
  @action
  handleAddTodo = (description, deadline) => {
    const id = Math.max(...this.Data.map(todo => todo.id), 0) + 1;

    const newTodo = {
      id,
      description,
      deadline,
      done: false
    };

    this.Data = [...this.Data, newTodo];
  };
  @action
  handleEdit = id => {
    this.Data.map(todo => {
      if (todo.id === id) {
        todo.edit = !this.edit;
      }

      return todo;
    });
  };
  @action
  cancelEdit = id => {
    this.Data.map(todo => {
      if (todo.id === id) {
        todo.edit = !todo.edit;
      }

      return todo;
    });
  };

  @action
  handleUpdate = (todoId, description, deadline) => {
    const newData = this.Data.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          description: description || todo.description,
          deadline: deadline || todo.deadline
        };
      }

      return todo;
    });
    this.Data = newData;
  };

  @computed
  get remainingTodos() {
    const remaining = this.Data.filter(todo => {
      return todo.done !== true;
    }).length;
    return remaining;
  }
}

const store = new TodosStore();
export default store;
