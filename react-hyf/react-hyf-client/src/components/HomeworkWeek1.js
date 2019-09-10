import React from 'react';

class ListItem extends React.Component {
  // ListItem component is creating a list item in page
  render() {
    const { id, description, deadline, done } = this.props;

    return (
      <li key={id} className={done ? 'itemCompleted' : 'itemNotCompleted'}>
        {description} , {deadline}
      </li>
    );
  }
}

class StaticList extends React.Component {
  // StaticList component is creating a list by using the ListItem component in page statically
  render() {
    return (
      <ul className="todoList">
        <ListItem id="1" description="Get out of bed" deadline="Wed Sep 13 2017" />
        <ListItem id="2" description="Brush teeth" deadline="Thu Sep 14 2017" />
        <ListItem id="3" description="Eat breakfast" deadline="Fri Sep 15 2017" />
      </ul>
    );
  }
}

class DynamicList extends React.Component {
  // DynamicList component is creating a list by using the ListItem component in page dynamically
  render() {
    const { todoList } = this.props;
    return (
      <ul className="todoList">
        {todoList.map(item => {
          return (
            <ListItem
              key={item.id}
              id={item.id}
              description={item.description}
              deadline={item.deadline}
              done={item.done}
            />
          );
        })}
      </ul>
    );
  }
}

class HomeworkWeek1 extends React.Component {
  // This component is main component that use another components.
  render() {
    const list = [
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

    return (
      <div>
        <h3>Static List</h3>
        <StaticList />
        <h3>Dynamic List</h3>
        <DynamicList todoList={list} />
      </div>
    );
  }
}

export default HomeworkWeek1;
