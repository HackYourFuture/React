import React from 'react';

// This component creates a list item with given properties description, deadline and done. To give class name to this created item, conditional "className"
// used. If the todo is done then the className is "done", if not done then "".
class TodoListItem extends React.Component {
  render() {
    const { description, deadline, done} = this.props;
     return (
      <li  className= {done ? "done" : ""}>
        {description}, {deadline}, {done}
      </li>
    );
  }
}

// Create a todo list called Static List with three list items
class StaticList extends React.Component {
  render() {
    return (
      <div className="static_list">
        <h2>Static List</h2>
        <ul>
          <TodoListItem description="Get out of bed" deadline="Wed Sep 13 2017" />
          <TodoListItem description="Brush teeth" deadline="Thu Sep 14 2017" />
          <TodoListItem description="Eat breakfast" deadline="Fri Sep 15 2017" />
        </ul>
      </div>
    );
  }
}

const dynamicListArray = [
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

// Create a todo list called Dynamic List with the items of the dynamicListArray
class DynamicList extends React.Component {
  render() {
   const { listArray } = this.props;
    return (
      <div className="dynamic_list">
        <h2>Dynamic List</h2>
        <ul>
          {listArray.map(listItem => {
            return (
              <TodoListItem
                key={listItem.id}                
                description={listItem.description}
                deadline={listItem.deadline}   
                done={listItem.done}                       
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

// Render the all lists
class Homework1 extends React.Component {
  render() {
    return (
      <div className="main">
        <StaticList />
        <DynamicList listArray={dynamicListArray}/>
      </div>
    );
  }
}

export default Homework1;
