/*to create a list item <li> element whose props are description and deadline*/

const ListItem = ({ description, deadline, className }) => {
  return (
    <li className={className}>
      Description: {description} Deadline: {deadline}
    </li>
  );
};

const StaticList = () => {
  return (
    <ul>
      <p>This is the Static List</p>
      <ListItem description="Get out of bed" deadline="2017-09-11" className="strike_through" />
      <ListItem description="Brush teeth" deadline="Brush teeth" className="" />
      <ListItem description="Eat breakfast" deadline="2017-09-09" className="" />
    </ul>
  );
};

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
      <p>This is the Dynamic List</p>
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

const Container_List = () => {
  return (
    <div>
      <StaticList />
      <DynamicList />
    </div>
  );
};

class ContainerList extends React.Component {
  render() {
    return <Container_List />;
  }
}

ReactDOM.render(<ContainerList />, document.getElementById('thisIsWhereReactIsInjected'));
