import React from 'react'
import {
    observer,
    inject
} from 'mobx-react'

@inject('todoStore')
@observer
export default class FilterTodos extends React.Component {
    onChange = e => {
        this.props.todoStore.filter = e.target.value
    }

    render() {
        const {filter} = this.props.todoStore
        return ( <input placeholder = {'search'}
            value = {filter}
            onChange = {this.onChange}
            />
        )
    }
}
