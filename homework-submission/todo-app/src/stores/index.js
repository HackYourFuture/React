import TodoStore from './TodoStore';
import { configure } from 'mobx';

//Enable MobX strict mode
configure({ enforceActions: true });

export default {
    todostore: TodoStore,
}