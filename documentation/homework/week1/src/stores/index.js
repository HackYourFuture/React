import TodoAppStore from './TodoAppStore'
import {configure} from 'mobx'

configure({enforceActions:true})

export default {
    todoStore: TodoAppStore
}