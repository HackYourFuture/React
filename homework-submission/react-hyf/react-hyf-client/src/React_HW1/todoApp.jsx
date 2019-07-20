import React from 'react';

const todoListDynamic = [
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
];

// TableTitle Component used by both static and dynamic todo list
const TableTitle = () => {
  return (
    <thead>
      <tr>
        <th> Description </th> <th> Deadline </th> <th> Done </th>{' '}
      </tr>{' '}
    </thead>
  );
};

const todoListStatic = [
  {
    description: '* Get out of bed',
    deadline: 'Wed Sep 13 2017',
    done: '',
  },
  {
    description: '* Brush teeth',
    deadline: 'Thu Sep 14 2017',
    done: '',
  },
  {
    description: '* Eat breakfast',
    deadline: 'Fri Sep 15 2017',
    done: '',
  },
];
const StaticTodoContent = () => {
  return (
    <tbody>
      <StaticTodoTableContent link={todoListStatic[0]} />{' '}
      <StaticTodoTableContent link={todoListStatic[1]} />{' '}
      <StaticTodoTableContent link={todoListStatic[2]} />{' '}
    </tbody>
  );
};

const StaticTodoTableContent = ({ link }) => {
  return (
    <tr>
      <td> {link.description} </td> <td> {link.deadline} </td> <td> {link.done} </td>{' '}
    </tr>
  );
};

// Static todo list used TableTitle component
class StaticTodo extends React.Component {
  render() {
    return (
      <div>
        <h2> Todo list as static </h2>{' '}
        <table>
          <TableTitle />
          <StaticTodoContent />
        </table>{' '}
      </div>
    );
  }
}

// ContentDynamicTodo component is for map function and used props
const ContentDynamicTodo = ({ description, deadline, className, done }) => {
  return (
    <tbody>
      <tr className={className}>
        <td> {description} </td> <td> {deadline} </td> <td> {className} </td>{' '}
      </tr>{' '}
    </tbody>
  );
};

// Dynamic todo list used map function component (ContentDynamicTodo) and TableTitle component
const DynamicTodo = () => {
  return (
    <div>
      <h2> Todo list as dynamic </h2>{' '}
      <table>
        <TableTitle />{' '}
        {todoListDynamic.map(({ id, description, deadline, done }) => (
          <ContentDynamicTodo
            key={id}
            description={description}
            deadline={deadline}
            className={done ? '√' : 'x'}
          />
        ))}{' '}
      </table>{' '}
    </div>
  );
};

class AppTodoW1 extends React.Component {
  render() {
    return (
      <div>
        <h1> Static Todo List </h1> <StaticTodo />
        <h1> Dynamic Todo List </h1> <DynamicTodo />
      </div>
    );
  }
}

export default AppTodoW1;
