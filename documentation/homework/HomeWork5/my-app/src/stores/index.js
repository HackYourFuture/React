import TodoItemsStore from './TodoItemsStore';
import {configure} from 'mobx';

configure({
    enforceActions: true
})

export default {
    todoS: TodoItemsStore,
}