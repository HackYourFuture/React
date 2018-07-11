import React from 'react';
import ToDoList from './ToDoList';

export default class ToDoItems extends React.Component {

    render() {
        const tasksInfo = [
            {
                'task': 'Reoccupation of the Saar',
                'date': '7 March 1936',
                'id': '01'
            },
            {
                'task': 'Anschluss with Austria',
                'date': '12 March 1938',
                'id': '02'
            },
            {
                'task': 'Demand Sudentenland',
                'date': '15 Sep 1938',
                'id': '03'
            }
        ];

        return (
            <div>
                {tasksInfo.map((element) =>
                    <ToDoList
                        key={element.id}
                        todoTask={element.task}
                        taskDate={element.date} />
                )
                }
            </div >
        );
    }
} 