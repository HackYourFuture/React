// 1 This will create a nav element to append lists into it
class App extends React.Component {
  render() {
    return (
      <nav>
        <OrderedList />
      </nav>
    );
  }
}

// 2 This is going to create the ordered list with the todos of my week until thursday.
const OrderedList = () => (
  <ul>
    <StaticList name="Practice for staatsexamen, Monday Feb 18 2019" />
    <StaticList name="Jogging, Tuesday Feb 19 2019" />
    <StaticList name="Attend to father's surgery, Wednesday Feb 20 2019" />
    <StaticList name="Make the homework of HYF, Thursday, Feb 21 2019" />
  </ul>
);
// 3 With this, I can create an element list and append the name props in it, props will be the description of my todo
const StaticList = ({ name }) => (
  <li>
    <input type="checkbox" />
    <p>{name}</p>
  </li>
);

ReactDOM.render(<App />, document.getElementById('root'));
