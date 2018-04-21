import React, {
    Component
} from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
class TodoList extends Component {
    render() {
        const TodoList = [{
                'myDate': 'Get out of bed',
                'MyTask': 'Wed Sep 13 2017'
            },
            {
                'myDate': 'Brush teeth',
                'MyTask': 'Thu Sep 14 2017'
            },
            {
                'myDate': 'Eat breakfast',
                'MyTask': 'Fri Sep 15 2017'
            }
        ];
        const TodoListElement = TodoList.map((element, index) =>
            <
            TodoItem myDate = {
                element.myDate
            }
            MyTask = {
                element.MyTask
            }
            />

        )

        return ( <div > {
                TodoListElement
            } </div>
        );
    }
}
export default TodoList;