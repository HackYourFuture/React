import { observable, action, configure } from "mobx";
import todosJSON from "../Sources/todosJSON.json";
import uuid from "uuid/v4";

configure({ enforceActions: "observed" });

class TodosStore {
  @observable
  todos = [...todosJSON];

  @observable
  newTodo = {
    description: "",
    deadline: "",
    id: ""
  };

  @observable
  actions = {
    editClicked: false,
    updatedTodo: {
      description: "",
      deadline: "",
      itemID: ""
    }
  };

  @action
  handleCheck = itemID => {
    const todos = this.todos.map(todo => {
      if (todo.id === itemID) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    return (this.todos = todos);
  };

  @action
  handleNewDescription = e => {
    const newTodo = { ...this.newTodo, description: e.target.value };

    return (this.newTodo = newTodo);
  };

  @action
  handleNewDeadline = e => {
    const newTodo = { ...this.newTodo, deadline: e.target.value };

    return (this.newTodo = newTodo);
  };

  @action
  handleSubmit = e => {
    e.preventDefault();

    const todos = [...this.todos];
    const { description, deadline, id } = this.newTodo;
    if (!description || !deadline) return;

    let newTodo = {
      description,
      deadline,
      id: id || uuid(),
      done: false
    };
    const todosCopy = [...todos, newTodo];
    newTodo = {
      description: "",
      deadline: "",
      id: "",
      done: false
    };

    return [(this.todos = todosCopy), (this.newTodo = newTodo)];
  };

  @action
  handleRemove = itemID => {
    const todos = [...this.todos];
    const newTodos = todos.filter(item => item.id !== itemID);

    return (this.todos = newTodos);
  };

  @action
  handleEdit = itemID => {
    const actions = { ...this.actions, editClicked: true };
    const todos = [...this.todos];

    const currentTodo = todos.filter(todo => todo.id === itemID)[0];
    const description = currentTodo.description;
    const deadline = currentTodo.deadline;

    actions.updatedTodo = {
      ...actions.updatedTodo,
      description,
      deadline,
      itemID: itemID
    };

    return (this.actions = actions);
  };

  @action
  handleCancel = () => {
    const actions = {
      ...this.actions,
      editClicked: false
    };
    actions.updatedTodo = {
      ...actions.updatedTodo,
      description: "",
      deadline: "",
      itemID: ""
    };

    return (this.actions = actions);
  };

  @action
  handleUpdateDescription = e => {
    const actions = { ...this.actions };
    actions.updatedTodo = {
      ...actions.updatedTodo,
      description: e.target.value
    };

    return (this.actions = actions);
  };

  @action
  handleUpdateDeadline = e => {
    const actions = { ...this.actions };

    actions.updatedTodo = {
      ...actions.updatedTodo,
      deadline: e.target.value
    };

    return (this.actions = actions);
  };

  @action
  handleUpdate = itemID => {
    const todos = [...this.todos];
    let actions = { ...this.actions };

    const todosCopy = todos.map(todo => {
      if (todo.id === itemID) {
        todo = {
          ...todo,
          description: actions.updatedTodo.description,
          deadline: actions.updatedTodo.deadline
        };
        actions = { ...actions, editClicked: false };

        actions.updatedTodo = {
          ...actions.updatedTodo,
          description: "",
          deadline: "",
          itemID: ""
        };
      }
      return todo;
    });

    return [(this.actions = actions), (this.todos = todosCopy)];
  };
}

const Store = new TodosStore();
export default Store;
