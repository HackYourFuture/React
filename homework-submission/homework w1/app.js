const ListItem = ({ description, deadLine, className }) => {
  return <li className={className}>{description + ', ' + deadLine}</li>;
};
//ListItem is a reuseable component that has 3 props (description,deadline,className) and return a list item with description and deadLine separated by comma
class StaticList extends React.Component {
  render() {
    return (
      <ul>
        Static list
        <ListItem description="Get out of bed" deadLine="Wed Sep 13 2017" />
        <ListItem description="Brush teeth" deadLine="Thu Sep 14 2017" />
        <ListItem description="Eat breakfast" deadLine="Fri Sep 15 2017" />
      </ul>
    );
  }
}
//class App is component return unordered list and make use of the list item component

const toDoList = [
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

class DynamicList extends React.Component {
  render() {
    return (
      <ul>
        Dynamic list
        {toDoList.map((item, i) => {
          return (
            <ListItem
              description={item.description}
              deadLine={item.deadline}
              key={i}
              className={item.done === true ? 'done' : 'not-done'}
            />
          );
        })}
      </ul>
    );
  }
}
//class DynamicList is component return unordered list and map the array to return data and show it by the list item component

class App extends React.Component {
  render() {
    return (
      <div>
        <StaticList />
        <DynamicList />
      </div>
    );
  }
}
const root = document.getElementById('thisIsWhereReactIsInjected');
ReactDOM.render(<App />, root);
