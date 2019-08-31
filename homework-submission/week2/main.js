/**
 * Component Structure
 *
 * App
 *  + TaskContainer
 *    + TaskAddForm
 *      - Input[description]
 *      - Input[deadline]
 *      - Button[add]
 *    + TaskList
 *      + TaskItem
 *        - Text[description]
 *        - Text[deadline]
 *        - Button[delete]
 */

const tasks = [
  {
    id: 1,
    description: 'Get out of bed',
    deadline: '2017-09-11',
    done: true
  },
  {
    id: 2,
    description: 'Brush teeth',
    deadline: '2017-09-10',
    done: false
  },
  {
    id: 3,
    description: 'Eat breakfast',
    deadline: '2017-09-09',
    done: false
  }
];

// Material Icon component
const Icon = ({ children }) => <i className="material-icons">{children}</i>;

// Task item component
const TaskItem = ({ task, onRemove, onToggleMarked }) => (
  <StyledListItem>
    <div onClick={() => onToggleMarked(task.id)} className={task.done ? 'done' : ''}>
      {task.done && <Icon>check</Icon>}
      <StyledText bold>{task.description}</StyledText>
      <StyledText small>{task.deadline}</StyledText>
    </div>
    <div>
      <StyledButton inverse theme="secondary" onClick={() => onRemove(task.id)}>
        <Icon>delete</Icon>
      </StyledButton>
    </div>
  </StyledListItem>
);

// Task list component
const TaskList = props => {
  const sortedTasks = props.tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  const totalTasks = props.tasks.length;
  const totalCompletedTasks = sortedTasks.filter(task => task.done).length;
  const unCompletedTasks = props.tasks.filter(task => !task.done);
  const completedTasks = props.tasks.filter(task => task.done);

  return (
    <React.Fragment>
      <StyledTitle>
        Sorted Task List
        <StyledText small>({totalCompletedTasks + '/' + totalTasks})</StyledText>
      </StyledTitle>
      <nav>
        {completedTasks.map(task => (
          <TaskItem key={task.id} task={task} {...props} />
        ))}
        {unCompletedTasks.map(task => (
          <TaskItem key={task.id} task={task} {...props} />
        ))}
      </nav>
    </React.Fragment>
  );
};

// Task add form component
class TaskAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      deadline: new Date().toISOString().substr(0, 10)
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const description = e.target.description.value;
    const deadline = e.target.deadline.value;
    this.props.onAdd(description, deadline);
  };

  handleChange = e => {
    const target = e.target;
    if (target.name === 'description') this.setState({ description: target.value });
    if (target.name === 'deadline') this.setState({ deadline: target.value });
  };

  render() {
    return (
      <form name="form" onSubmit={this.handleSubmit.bind(this)}>
        <StyledInput
          name="description"
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.handleChange.bind(this)}
        />
        <StyledInput
          name="deadline"
          type="text"
          placeholder="Deadline"
          value={this.state.deadline}
          onChange={this.handleChange.bind(this)}
        />
        <StyledButton full theme="primary">
          <Icon>add</Icon>
        </StyledButton>
      </form>
    );
  }
}

// Task container component
class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.data,
      lastId: this.props.data.length
    };
  }

  handleAdd(description, deadline) {
    // I any field is empty, alert user without adding the task
    if (description === '' || deadline === '') return alert('Please fill all the fields!');

    const tasks = [...this.state.tasks];
    let _lastId = this.state.lastId;
    tasks.push({
      id: ++_lastId,
      description,
      deadline,
      done: false
    });

    this.setState({ tasks, lastId: _lastId });
  }

  handleRemove(id) {
    const filteredTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks: filteredTasks });
  }

  handleToggleMarked(id) {
    const tasks = [...this.state.tasks];
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    this.setState({ tasks });
  }

  render() {
    return (
      <StyledContainer>
        <StyledTitle>React Task App</StyledTitle>
        <TaskAddForm onAdd={this.handleAdd.bind(this)} />
        <TaskList
          tasks={this.state.tasks}
          onRemove={this.handleRemove.bind(this)}
          onToggleMarked={this.handleToggleMarked.bind(this)}
        />
        {/* If TaskList is emptye render this instead */}
        {this.state.tasks.length === 0 && (
          <StyledBanner theme="primary">Task list is empty. Lets add one!</StyledBanner>
        )}
      </StyledContainer>
    );
  }
}

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <TaskContainer data={tasks} />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
