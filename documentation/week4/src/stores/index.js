
import { configure } from 'mobx'
import ListStore from './ListStore'

//Enable Monx strict mode
configure({ enforceActions: true })

export default {

    todos: ListStore,

}