import React from 'react';
import styled from 'styled-components';

const Body = styled.body`
  background: white;
  color: black;
  height: 100vh;
  margin: 0;
  padding: 2rem;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  margin-top: 2rem;
  font-weight: 400;
`;

class Header extends React.Component {
  render() {
    return <H1>{this.props.title}</H1>;
  }
}
// This component shows the title of the list as h1 element in the DOM.

class ListItem extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            {this.props.description}, {this.props.deadline}
          </li>
        </ul>
      </div>
    );
  }
}
// This component shows the todo list item as li in the DOM.
// There are 2 props which are "description" and "deadline". Description shows what todo is about.And the deadline shows the due date of the todo.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
    return (
      <Body>
        <Header title="Static List" />
        <ListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />

        <Header title="Dynamic List" />
        {this.state.todos.map(todo => {
          return (
            <div key={todo.id} className={`${todo.done}`}>
              <ListItem description={todo.description} deadline={todo.deadline} />
            </div>
          );
        })}
      </Body>
    );
  }
}

export default App;
