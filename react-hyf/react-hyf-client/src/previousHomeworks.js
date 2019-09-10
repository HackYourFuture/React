import React from 'react';

const todoArr = [
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

const Title = ({ text }) => <h1 className="title">{text}</h1>;

const Input = ({ type, name }) => {
  return (
    <div className="input-section">
      <label className="label" htmlFor={name}>
        {name}:
      </label>
      <input className="input" type={type} name={name} required={type !== 'checkbox'} />
    </div>
  );
};

const Button = ({ type, text, clickHandler }) => {
  return (
    <button className="button" type={type} onClick={clickHandler}>
      {text}
    </button>
  );
};

const ListItem = ({ clickHandler, todo }) => {
  const date = new Date(todo.deadline).toLocaleDateString('en-EN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <li onClick={clickHandler} id={todo.id} className={`list-item ${todo.done ? 'done' : ''}`}>
      {todo.description}, {date}
    </li>
  );
};

const AddNewTodo = ({ submitHandler }) => {
  return (
    <section className="form container">
      <Title text="Add a new todo" />
      <form className="form" onSubmit={submitHandler}>
        <Input type="text" name="description" />
        <Input type="date" name="deadline" />
        <Input type="checkbox" name="done" />
        <Button type="submit" text="Add New Todo" />
      </form>
    </section>
  );
};

const TodoList = ({ todoArr, liClickHandler, buttonClickHandler, clickBehaviour }) => {
  return (
    <section className="list container">
      <Title text="Todo List" />
      <Button clickHandler={buttonClickHandler} text={clickBehaviour} />
      <ul className="list">
        {todoArr.map(todo => (
          <ListItem key={todo.id} clickHandler={liClickHandler} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = { todoArr: props.todoArr, behaviour: 'mark' };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.markOrDeleteTodo = this.markOrDeleteTodo.bind(this);
    this.changeBehaviour = this.changeBehaviour.bind(this);
  }

  addNewTodo(event) {
    event.preventDefault();
    const currentTodos = [...this.state.todoArr];
    const newTodo = {
      id: currentTodos[currentTodos.length - 1] ? currentTodos[currentTodos.length - 1].id + 1 : 1,
      description: event.target.description.value,
      deadline: event.target.deadline.value,
      done: event.target.done.checked ? 'done' : '',
    };
    currentTodos.push(newTodo);
    this.setState({ todoArr: currentTodos });
  }

  markTodo(event) {
    const copyArr = this.state.todoArr.map(todo => {
      if (todo.id.toString() === event.target.id) {
        todo.done = todo.done ? '' : 'done';
      }
      return todo;
    });
    this.setState({ todoArr: copyArr });
  }

  deleteTodo(event) {
    const remainingTodos = this.state.todoArr.filter(
      todo => todo.id.toString() !== event.target.id,
    );
    this.setState({ todoArr: remainingTodos });
  }

  markOrDeleteTodo(event) {
    this.state.behaviour === 'mark' ? this.markTodo(event) : this.deleteTodo(event);
  }

  changeBehaviour() {
    this.setState({
      behaviour: this.state.behaviour === 'mark' ? 'delete' : 'mark',
    });
  }

  render() {
    return (
      <section className="prev-hw">
        <AddNewTodo submitHandler={this.addNewTodo} />
        <TodoList
          todoArr={this.state.todoArr}
          liClickHandler={this.markOrDeleteTodo}
          buttonClickHandler={this.changeBehaviour}
          clickBehaviour={`Click a Todo to ${this.state.behaviour}`}
        />
      </section>
    );
  }
}

export { Main as PreviousHomeworks, todoArr };
