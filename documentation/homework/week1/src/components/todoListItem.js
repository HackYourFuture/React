import React,{Component} from 'react';

class TodoListItem extends Component {
    render() {
        return (
            <ul>
                <li>
                    {this.props.description},{this.props.deadLine}
                </li>
            </ul>
        )
    }
}

export default TodoListItem;