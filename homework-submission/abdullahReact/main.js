const toDoItems = [
  {
    id: 1,
    description: 'Get out of bed',
    deadLine: '2017-09-11',
    done: true,
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadLine: '2017-09-10',
    done: false,
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadLine: '2017-09-09',
    done: false,
  },
];

const Label = ({ text, className, htmlFor }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

const Input = ({ name, className, type, placeholder, defaultValue }) => {
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
    ></input>
  );
};

const Header = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

const Button = ({ text, type, className, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

const Form = ({ addListItem }) => {
  const x = new Date();
  const y = x.getFullYear().toString();
  let m = (x.getMonth() + 1).toString();
  let d = x.getDate().toString();
  d.length == 1 && (d = '0' + d);
  m.length == 1 && (m = '0' + m);
  let date = y + '-' + m + '-' + d;
  return (
    <div>
      <form onSubmit={addListItem}>
        <Label text="Add an item to list" className="label" htmlFor="itemToAdd" />
        <Input
          name="itemToAdd"
          className="itemInput"
          placeholder="write description of todo item"
          type="text"
        />
        <br></br>
        <Label text="Deadline" className="label" htmlFor="deadLine" />
        <Input className="input" type="date" name="deadLine" defaultValue={date} />
        <br></br>
        <Button text="Add item" type="submit" className="addButton" />
      </form>
    </div>
  );
};

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.done };
  }

  switchDoneState() {
    this.setState({ done: !this.state.done });
  }
  render() {
    const { id, description, deadLine, onClick } = this.props;
    return (
      <li key={id} id={id} className={`listItem ${this.state.done}`}>
        <p onClick={this.switchDoneState.bind(this)} className="itemDesc">
          {description}
        </p>
        <p className="itemDead">{deadLine}</p>
        <Button text="Delete item !" className="deleteButton" onClick={onClick} />
      </li>
    );
  }
}

class DynamicList extends React.Component {
  render() {
    let { toDoArr, deleteSelectedItem } = this.props;
    return (
      <ul>
        <Header className="listHeader" text="Todo List" />
        {toDoArr.map((item, i) => (
          <ListItem
            key={item.id}
            id={item.id}
            done={item.done}
            description={item.description}
            deadLine={item.deadLine}
            onClick={deleteSelectedItem}
          />
        ))}
      </ul>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: toDoItems };
  }

  deleteSelectedItem = event => {
    const itemToDelete = event.target.parentElement.id;
    const data = this.state.data;
    const newData = data.filter(item => item.id != itemToDelete);
    this.setState({ data: newData });
  };

  addListItem = event => {
    event.preventDefault();
    const value = event.target.itemToAdd.value;
    if (value == '') {
      alert("empty string can't be added");
      return;
    }
    const newData = this.state.data;
    const copyNewData = [...newData];
    let deadLine = event.target.deadLine.value;
    const dateTest = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    if (!dateTest.test(deadLine)) {
      deadLine = 'not defined';
    }
    copyNewData.push({
      id: copyNewData[copyNewData.length - 1].id + 1,
      description: value,
      deadLine: deadLine,
      done: false,
    });
    this.setState({
      data: copyNewData,
    });
  };

  render() {
    return (
      <div>
        <Form addListItem={this.addListItem.bind(this)} />
        <DynamicList toDoArr={this.state.data} deleteSelectedItem={this.deleteSelectedItem} />
      </div>
    );
  }
}

const root = document.getElementById('thisIsWhereReactIsInjected');

ReactDOM.render(<App />, root);
