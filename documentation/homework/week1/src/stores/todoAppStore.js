import {action,observable} from 'mobx';
import todoList from '../components/todoList.json';
import newID from 'uuid/v4';
import moment from 'moment';

class TodoAppStore{

    @observable
    listTodo = todoList;

    @observable
    defaultValue = {
        id:'',
        description:'',
        deadline:moment(),
        done:false
    }

    @action
    onChangeState = (field,value) => {
        const currentState=this.defaultValue;
        currentState[field]=value;
        this.defaultValue = currentState;
    }

    @action
    handleDateStateChange = (element) => {
        this.defaultValue.deadline =element;
    }

    @action
    onAddFunction(id,description,deadline,done){
        this.addFunction(id,description,deadline,done);
        this.defaultValue = {
            description:'',
            deadline:moment(),
        }
    }

    @action
    addFunction = (id,description,deadline,done) => {
        const currentState = this.listTodo.map(element => element);
        const newState={id:newID(),description:description,deadline:deadline.format('YYYY-MM-DD'),done:done}
        const updatedState=currentState.concat(newState);
        this.listTodo = updatedState;
    }

    @action
    handleDoneClick = (id) => {
        const newTodoList= this.listTodo.map((todoElement) => {
            if(todoElement.id === id){
                return {
                    ...todoElement,
                    done:!todoElement.done,
                }
            }
            return todoElement;
        });
        this.listTodo = newTodoList;
    }

    @action
    removeTodo = (id) => {
        const currentList =this.listTodo;
        const newList = currentList.filter(todo => todo.id !== id)
        this.listTodo = newList;
    }
}

export default new TodoAppStore()