const path = '/data.json';

// to add list item with classes and onClick event
//props are description, deadline, onClick, className

const ListItem = ({ description, deadline, onClick, className }) => {
  return (
    <li className={className} onClick={onClick}>
      Description: {description} Deadline: {deadline}
    </li>
  );
};

//this list takes list items and loops through data to fill list items

const List = ({ todoList }) => {
  return (
    <ul>
      {todoList.map(({ id, description, deadline, done }) => (
        <ListItem
          description={description}
          deadline={deadline}
          className={done === true ? 'strike_through' : ''}
          onClick={event => classChanger(event)}
          key={id}
        />
      ))}
    </ul>
  );
};

//input element is used in form
// probs are type, name, placeholder, onChange

const Input = ({ type, name, placeholder, onChange }) => {
  return <input type={type} name={name} placeholder={placeholder} onChange={onChange} />;
};

//button element is used in form
// probs are value, onClick

const Button = ({ value, onClick }) => {
  return <button onClick={onClick}> {value} </button>;
};

// this todos class will be populated by list items, inputs and buttons
// the state of this class will be used to update the list

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }
  // to add initial todo list
  componentDidMount() {
    readFile(path)
      .then(data => data.json())
      .then(response => {
        this.setState(() => ({
          todos: response,
        }));
      })
      .catch(error => {
        this.setState(() => {
          todos: error.message;
        });
      });
  }
  //to add new todos with unique id's. Even though a todo is deleted, none of the id's will be coincided.
  addTodo(event, NewTodo, todos) {
    event.preventDefault();
    const lastTodoIndex = todos.length - 1;
    NewTodo.id = todos[`${lastTodoIndex}`].id + 1;
    todos.push(NewTodo);
    this.setState({
      todos: todos,
    });
  }
  // to delete todos. User must insert todos place in the list to delete it
  deleteTodo(event, TodoNumber, todos) {
    event.preventDefault();
    const updatedList = todos.filter((todo, index) => {
      return index != TodoNumber - 1;
    });
    this.setState({ todos: updatedList });
  }
  render() {
    const todos = this.state.todos;
    // this new todo is produced to be pushed when Add new todo button is clicked.
    const NewTodo = {
      id: 0,
      description: '',
      deadline: '',
      done: false,
    };
    let TodoNumber = 0;
    // a form to add new todo. Populated with 2 inputs (description, deadline) and button
    const AddTodoForm = ({}) => {
      return (
        <form>
          <Input
            type={'text'}
            name={'todo_description'}
            placeholder={'Give a description'}
            onChange={event => {
              NewTodo.description = event.target.value;
            }}
          />
          <Input
            type={'text'}
            name={'todo_deadline'}
            placeholder={'YYYY/MM/DD'}
            onChange={event => {
              NewTodo.deadline = event.target.value;
            }}
          />
          <Button
            value={'Add new todo'}
            onClick={event => {
              this.addTodo(event, NewTodo, todos);
            }}
          />
        </form>
      );
    };
    // a form to delete a specific todo. Populated with an input (todo list position) and button

    const DeleteTodoForm = ({}) => {
      return (
        <form>
          <Input
            type={'text'}
            name={'todo_id'}
            placeholder={'Number'}
            onChange={event => {
              TodoNumber = event.target.value;
            }}
          />
          <Button
            value={'Delete todo'}
            onClick={event => {
              this.deleteTodo(event, TodoNumber, todos);
            }}
          />
        </form>
      );
    };
    return (
      <div>
        <h2>Todo List</h2>
        <List todoList={this.state.todos} />
        <AddTodoForm />
        <DeleteTodoForm />
      </div>
    );
  }
}
//rendering
ReactDOM.render(<Todos />, document.getElementById('root'));
