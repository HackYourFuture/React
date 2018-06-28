import { action, observable, computed } from 'mobx';
import todoList from '../components/todos.json';
import moment from 'moment';
import '../App.css';

class TodoStore {

    @observable
    listTodo = todoList

    @observable
    emptyListTodo = {}

    @observable
    defaultValue = {
        id: '',
        description: '',
        deadline: moment(),
        done: false
    }

    @observable
    editing = false


    @computed
    get completedTodosCount() {
        return this.listTodo.filter(
            todo => todo.done === true
        ).length;
    }
    @computed
    get todosCount() {
        return this.listTodo.length;
    }



    @action
    handleCheckBox = (id) => {
        const newTodoList = this.listTodo.map((todoElement) => {
            if (todoElement.id === id) {

                return {
                    ...todoElement,
                    done: !todoElement.done
                }

            }
            else {
                return todoElement;
            }

        });

        this.listTodo = newTodoList;

    }

    @action
    onChanging = (index, value) => {
        const newValue = this.defaultValue;
        newValue[index] = value;
        this.defaultValue = newValue;

    };

    @action
    onSubmitAdd = (e) => {
        e.preventDefault();
        if (e.target.description.value === '' || e.target.deadline.value === '') {
            alert('You must Enter Description and Date!!')
            return null;
        }
        else {

            let stateTodos = this.listTodo;
            stateTodos = {
                id: this.listTodo.length + 1,
                description: e.target.description.value,
                deadline: e.target.deadline.value,
                done: e.done
            };

            this
                .listTodo
                .push(stateTodos);
            e.target.description.value = '';
            e.target.deadline.value = '';

        }
    }

    @action
    removeTodo = (id) => {

        let stateTodos = this.listTodo.filter((item) => {
            return item.id !== id;

        })

        this.listTodo = stateTodos;

    }


    @action
    handleEditing = (e) => {
        let field = e.target.id;
        this.editing = true;

        e.target.value = this.listTodo[field].description;



    }

    @action
    handleEditingDone = (e) => {

        if (e.keyCode === 13) {

            this.editing = false;
        }

    }

    @action
    handleEditingChange = (event) => {

        let field = event.target.id;
        this.listTodo[field].description = event.target.value;

    }

}
export default new TodoStore();
