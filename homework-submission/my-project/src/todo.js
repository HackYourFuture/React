import React from 'react';

const todos = [
    { id: 1, description: 'Do my dutch homework', deadline: 'FRI 19 SEP' },
    { id: 2, description: 'React homework', deadline: 'SAT 20 SEP' },
    { id: 3, description: 'preaper to React week2 ', deadline: 'SUN 21 SEP' }

]

class TodosList extends React.Component {
    item = todos.map((item) => (
        <li >
            {item.id + "- " + item.description + " DeadLine: " + item.deadline}
        </li>
    ));
    render() {
        return <ol>{this.item}</ol>;
    }
}

export default TodosList 