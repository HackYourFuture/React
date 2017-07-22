import React from 'react'
import SingleTask from './SingleTask'

export const TaskList = (tasks) => (
    <ol>
        {tasks.map((task, index) =>
            <SingleTask key={index} {...task} />
        )}
        </ol>
)