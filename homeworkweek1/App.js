'use strict';
/*to create a list item <li> element whose props are description and deadline*/
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
    <div>
      <p>Static List</p>
      <ul className="static-list">
        <ListItem listInfo={{ description: ' Get out of bed', deadline: 'Wed Sep 13 2017' }} />
        <ListItem listInfo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
        <ListItem listInfo={{ description: ' Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
      </ul>
    </div>
  );
};
// to create a dynamic list that is filled with list item as its components. props are now dynamically added with map function
const DynamicList = props => {
  const { DynamicListInfo } = props;
  return (
    <div>
      <p>Dynamic List</p>
      <ul className="dynamic-list">
        {DynamicListInfo.map((item, index) => (
          <li id="Dynamic " className={item.done ? 'done' : 'not-done'}>
            {item.description},{item.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
};
//container list is created as a class to render static and dynamic lists.
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
