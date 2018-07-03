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
        deadline: moment().format('MM-DD-YYYY'),
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
        this.listTodo = this.listTodo.map((todoElement) => {
            return (todoElement.id === id) ?
                {
                    ...todoElement,
                    done: !todoElement.done
                }
                : todoElement;
        });

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

    @action
    removeTodo = (id) => {

        const stateTodos = this.listTodo.filter((item) => {
            return item.id !== id;

        })

        this.listTodo = stateTodos;

    }


    @action
    handleEditing = () => {

        this.editing = true;

    }

    @action
    handleEditingDone = (e) => {
        // keyCode=13 is firing when you click ENTER
        if (e.keyCode === 13) {

            this.editing = false;
        }

    }

    @action
    handleEditingChange = (e) => {

        let field = e.target.id;
        this.listTodo[field].description = e.target.value;

    }

}
export default new TodoStore();
