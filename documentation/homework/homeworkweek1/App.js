'use strict';

const ListItem = props => {
  const { description, deadline } = props.listInfo;
  return (
    <li>
      {' '}
      {description},{deadline}
    </li>
  );
};

const StaticList = props => {
  return (
    <div className="static-list">
      <p>Static List</p>

      <ListItem listInfo={{ description: ' Get out of bed', deadline: 'Wed Sep 13 2017' }} />
      <ListItem listInfo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
      <ListItem listInfo={{ description: ' Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
    </div>
  );
};

const DynamicList = props => {
  const { DynamicListInfo } = props;
  return (
    <div className="dynamic-list">
      <p>Dynamic List</p>
      {DynamicListInfo.map((item, index) => (
        <li key={index} className={item.done ? 'done' : 'not-done'}>
          {item.description},{item.deadline}
        </li>
      ))}
    </div>
  );
};

class Container extends React.Component {
  state = {
    DynamicList: [
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

  render() {
    console.log(this.state.DynamicList);
    return (
      <div>
        <StaticList />
        <DynamicList DynamicListInfo={this.state.DynamicList} />
      </div>
    );
  }
}

const domContainer = document.querySelector('#thisIsWhereReactIsInjected');

ReactDOM.render(<Container />, domContainer);
