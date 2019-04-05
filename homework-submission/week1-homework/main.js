function IntroText({ details, handleDone, crossedClassName }) {
  const { id, description, deadline } = details;
  return (
    <div>
      <h3 className="blue">ToDo: {id}</h3>
      <ul className="ul">
        <li className={crossedClassName}>Description: {description}</li>
        <li>Deadline: {deadline}</li>
      </ul>
      <button onClick={handleDone}>Done / Undone</button>
    </div>
  );
}

class ToDoApp extends React.Component {
  state = {
    details: [
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

  toggleShow = index => {
    const { details } = this.state;

    const newDetails = details.map((detail, i) => {
      if (index === i) {
        detail.done = !detail.done;
      }
      return detail;
    });
    this.setState({ details: newDetails });
  };

  render() {
    const { details } = this.state;

    console.log('here', this.state);

    return (
      <div>
        <div>
          <h1 className="title">Dynamic ToDo List</h1>
        </div>
        {details.map((detail, index) => {
          return (
            <div>
              <IntroText
                details={detail}
                handleDone={() => this.toggleShow(index)}
                crossedClassName={detail.done ? 'crossed' : ''}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

const ListItem = ({ description, deadline }) => {
  return (
    <li>
      {description}
      {deadline}
    </li>
  );
};
// The goal of this component is to create a static todo template

const StaticHeader = () => {
  return <h1 className="title"> Static ToDo List </h1>;
};
// The goal of this component is to insert a header in static side of the page

const List = () => (
  <ul>
    <ListItem description="Get out of bed" deadline=", Wed Sep 13 2017 ." />
    <ListItem description=" Brush teeth" deadline=", Thu Sep 14 2017 ." />
    <ListItem description=" Eat breakfast" deadline=", Fri Sep 15 2017 ." />
  </ul>
);
// The goal of this component is to insert the static todos into an unordered list

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <StaticHeader /> <List />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    {' '}
    <ToDoList /> <ToDoApp />{' '}
  </div>,
  document.getElementById('thisIsWhereReactIsInjected')
);
