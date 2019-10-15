import React from 'react';

import './Homework1.css';

const Header = props => {
  return <h3 className="text-center text-danger mt-4">{props.title}</h3>;
};

const StaticListItem = ({ description, deadline }) => {
  return (
    <li className="bg-light list-group-item">
      {description}
      {'  ,'}
      {deadline}
    </li>
  );
};

const DynamicListItem = props => {
  return (
    <li
      className={
        props.done
          ? ' bg-light list-group-item d-flex justify-content-between done'
          : 'bg-light list-group-item d-flex justify-content-between'
      }
    >
      {props.description}
      {'  ,'}
      {props.deadline}
      {props.done}
      <span>
        <input type="checkbox" onChange={props.handleComplete} />
      </span>
    </li>
  );
};

class Homework1 extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: false,
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

  handleComplete = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto">
            <div>
              <Header title="Static List" />
              <ul className="list-group">
                <StaticListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
                <StaticListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
                <StaticListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
              </ul>
            </div>

            <div>
              <Header title="Dynamic List" />
              <ul className="list-group">
                {this.state.todos.map(todo => (
                  <DynamicListItem
                    key={todo.id}
                    description={todo.description}
                    deadline={todo.deadline}
                    done={todo.done}
                    handleComplete={this.handleComplete.bind(this, todo.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('thisIsWhereReactIsInjected'));
export default Homework1;
