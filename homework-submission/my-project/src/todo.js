import React from 'react';


class Todos extends React.Component {
    state = {
        todos: [
            { id: 1, description: 'Do my dutch homework', deadline: 'FRI 19 SEP' },
            { id: 2, description: 'React homework', deadline: 'SAT 20 SEP' },
            { id: 3, description: 'preaper to React week2 ', deadline: 'SUN 21 SEP' }

        ]
    }
    render() {
        return (
            <div class="item">
                {this.state.todos.map(item => <li>{item.id}:{item.description}, Deadline:{item.deadline}</li>)}
            </div>
        )
    }
}
export default Todos 