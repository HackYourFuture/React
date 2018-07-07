import React from 'react'
import {observer,inject} from 'mobx-react'
import TodoItem from './TodoItem'

const Todolist = ({
        todoStore: {
            filterList
        }
    }) => ( <ul style = {
            {
                listStyle: 'none'
            }
        } > {
            filterList.map(todo => < TodoItem key = {
                    todo.id
                }
                todo={todo} />)}
    </ul>
            )

            export default inject('todoStore')(observer(Todolist))
