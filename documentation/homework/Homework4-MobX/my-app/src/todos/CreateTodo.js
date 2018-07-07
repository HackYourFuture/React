import React from 'react'
import {observer,inject} from 'mobx-react'

@inject('todoStore')
@observer
export default class CreateTodo extends React.Component {
    addTodo = e => {
        if (e.which === 13) {
            this.props.todoStore.createTodo(e.target.value.trim())
            e.target.value = ''
        }
    }

    render() {
        return ( <input style = {
                {
                    marginLeft: 20
                }
            }
            placeholder = {
                'add todo'
            }
            onKeyPress = {
                this.addTodo
            }/>
        )
    }
}
