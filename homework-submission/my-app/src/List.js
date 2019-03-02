import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: true,
        },
        {
          id: 2,
          description: 'Brush teeth',
          deadline: '2017-09-10',
          done: false,
        },
        {
          id: 3,
          description: 'Eat breakfast',
          deadline: '2017-09-09',
          done: false,
        },
      ],
    };
  }

  render() {
    return this.state.items.map(item => (
      <div className="todo">
        <div
          description={item.description}
          deadline={item.deadline}
          done={item.done}
          style={{ textDecoration: item.done && 'line-through' }}
        >
          {item.description}, {item.deadline}
        </div>
        {/* <div className="actions">
          <button
            className="buttons"
            onClick={event => {
              event.preventDefault();
              // complete todo
            }}
          >
            done/undone
          </button>
          <button
            className="buttons"
            onClick={event => {
              event.preventDefault();
              // remove todo
            }}
          >
            remove
          </button>
        </div> */}
      </div>
    ));
  }
}

export default List;
