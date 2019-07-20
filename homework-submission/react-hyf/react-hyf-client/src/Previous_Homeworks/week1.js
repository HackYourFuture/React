import React from 'react';
import Navigation from '../Navigation/Navigation';
import './styles.css';

/*to create a list item <li> element whose props are description and deadline*/
const ListItem = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      Description: {description} Deadline: {deadline}
    </li>
  );
};

// to create a static list that is filled with listitem as its components. props are well obviously added

const StaticList = () => {
  return (
    <React.Fragment>
      <Navigation />
      <br />
      <ol className="list">
        This is the Static List
        <ListItem description="Get out of bed" deadline="2017-09-11" className="strike_through" />
        <ListItem description="Brush teeth" deadline="Brush teeth" className="" />
        <ListItem description="Eat breakfast" deadline="2017-09-09" className="" />
      </ol>
    </React.Fragment>
  );
};

// to create a dynamic list that is filled with listitem as its components. props are now dynamically added with map function

const DynamicList = () => {
  const dynamicData = [
    {
      id: 1,
      description: 'Get out of bed',
      deadline: '2017-09-11',
      done: true,
    },
    {
      id: 2,
      description: 'Brush teeth',
      deadline: 'Brush teeth',
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
    <ul>
      This is the Dynamic List
      {dynamicData.map(({ id, description, deadline, done }) => {
        return (
          <ListItem
            key={id}
            description={description}
            deadline={deadline}
            className={done === true ? 'strike_through' : ''}
          />
        );
      })}
    </ul>
  );
};

//container list is created as a class to render static and dynamic lists.

class ContainerList extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}
export default ContainerList;
