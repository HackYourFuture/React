import React from 'react';

const ListItem = props => {
  const { description, deadline } = props.listInfo;
  return (
    <div>
      <li>
        {description},{deadline}
      </li>
    </div>
  );
};

const StaticList = () => {
  return (
    <div>
      <p>Static List</p>
      <ul className="static-list">
        <li class="list-group-item list-group-item-info">
          {' '}
          <ListItem listInfo={{ description: ' Get out of bed', deadline: 'Wed Sep 13 2017' }} />
        </li>
        <li class="list-group-item list-group-item-info">
          <ListItem listInfo={{ description: 'Brush teeth', deadline: 'Thu Sep 14 2017' }} />
        </li>
        <li class="list-group-item list-group-item-info">
          <ListItem listInfo={{ description: ' Eat breakfast', deadline: 'Fri Sep 15 2017' }} />
        </li>
      </ul>
    </div>
  );
};

class Week1 extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
      </div>
    );
  }
}
export default Week1;
