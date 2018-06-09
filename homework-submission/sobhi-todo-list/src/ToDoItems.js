import React from 'react';

import ToDoList from './ToDoList';


export default class ToDoItems extends React.Component {

    render() {

        const tasksInfo = [

            {

                'task': 'Get out of bed',

                'date': 'Wed Sep 13 2017',

                'id': '1'

            },
            {

                'task': 'Brush teeth',

                'date': 'Thu Sep 14 2017',

                'id': '2'

            },

            {

                'task': 'Eat breakfast',

                'date': 'Fri Sep 15 2017',

                'id': '3'

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