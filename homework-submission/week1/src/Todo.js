import React, {
    Component
} from 'react';
import Main from './Main';

class Todo extends Component {


    render() {
        const Items = [{
            todoDescription: " Get out of bed",
            deadline: " Wed Sep 13 2017"
        },
        {
            todoDescription: " Brush teeth",
            deadline: " Thu Sep 14 2017"
        },
        {
            todoDescription: " Eat breakfast",
            deadline: " Fri Sep 15 2017"
        }
        ];

        return (
            <div > {
                Items.map((element, index) => (<
                    Main key={
                        index
                    }
                    todoDescription={
                        element.todoDescription
                    }
                    deadline={
                        element.deadline
                    }
                />
                ))
            }
            </div >
        );
    }
}

export default Todo;