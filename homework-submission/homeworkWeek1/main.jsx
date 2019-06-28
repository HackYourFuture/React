'use strict';

const { Component } = React;

// This component renders list items
const ListItem = props => {
  const { listData, isStatic, markAsCompleted } = props;
  let { description, deadline, id, done } = listData;
  return (
    <li
      id={id}
      onClick={() => {
        if (isStatic) {
          const element = document.getElementById(id);
          element.classList.toggle('done');
        } else {
          markAsCompleted(id - 1);
        }
      }}
      className={done ? 'done' : 'not-done'}
    >
      {description},{deadline}
    </li>
  );
};

//This component creates a static list and displays listItem components
const StaticList = props => {
  const { isStatic } = props;
  return (
    <div>
      <h2>Static List</h2>
      <ul className="static list">
        <ListItem
          listData={{ id: 1, description: 'Get out of bed', deadline: '13.9.2017' }}
          isStatic={isStatic}
        />
        <ListItem
          listData={{ id: 2, description: 'Brush teeth', deadline: '14.9.2017' }}
          isStatic={isStatic}
        />
        <ListItem
          listData={{ id: 3, description: 'Eat breakfast', deadline: '15.9.2017' }}
          isStatic={isStatic}
        />
      </ul>
    </div>
  );
};

//This component creates a dynamic list
const DynamicList = props => {
  const { listItems, markAsDone, isStatic } = props;
  return (
    <div>
      <h2>Dynamic List</h2>
      <ul className="dynamic list">
        {listItems.map(listData => (
          <ListItem
            key={listData.id}
            listData={listData}
            markAsCompleted={markAsDone}
            isStatic={isStatic}
          />
        ))}
      </ul>
    </div>
  );
};

//This is the main component of the app act as a container
class App extends Component {
  state = {
    dynamicList: [
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

  markAsDone = index => {
    let updateState = this.state.dynamicList[index];
    updateState.done = !updateState.done;
    this.setState(updateState);
  };

  render() {
    return (
      <div className="lists">
        <StaticList markAsDone={this.markAsDone} isStatic={true} />
        <DynamicList
          listItems={this.state.dynamicList}
          markAsDone={this.markAsDone}
          isStatic={false}
        />
      </div>
    );
  }
}

const domContainer = document.querySelector('#thisIsWhereReactIsInjected');

ReactDOM.render(<App />, domContainer);
