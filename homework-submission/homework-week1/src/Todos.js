import React from 'react';

class Todos extends React.Component {
  state = {
    todos: [
      { id: 1, description: 'Get out of bed', deadline: 'Wed Sep 13 2017' },
      { id: 2, description: 'Brush teeth', deadline: 'Thu Sep 14 2017' },
      { id: 3, description: 'Eat breakfast', deadline: 'Fri Sep 15 2017' }
    ]
  }
  render() {
    return (
      <div>
        {this.state.todos.map(item => <li>task{item.id}:<span>{item.description}</span>, deadline: <span>{item.deadline}</span></li>)}
      </div>

    )

  }
}
export default Todos