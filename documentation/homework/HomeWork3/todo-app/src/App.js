import React from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Separator from './components/Separator';
import DeletedTaskList from './components/DeletedTaskList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      tasks: [],
      deleted: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.undoDelete = this.undoDelete.bind(this);
    this.deleteForever = this.deleteForever.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = {
      id: Date.now(),
      name: this.state.value,
      completed: false
    };
    this.setState(prevState =>
      ({
        tasks: prevState.tasks.concat(task),
        value: ''
      })
    );
  }

  toggleComplete(task) {
    task.completed = !task.completed;
    this.setState(prevState =>
      ({ ...prevState.tasks,
        ...task
      })
    );
  }

  deleteTask(id) {
    this.setState(prevState =>
      ({
        tasks: prevState.tasks.filter(task => task.id !== id),
        deleted: prevState.deleted.concat(prevState.tasks.filter(task => task.id === id))
      })
    );
  }

  undoDelete(id) {
    this.setState(prevState =>
      ({
        deleted: prevState.deleted.filter(task => task.id !== id),
        tasks: prevState.tasks.concat(prevState.deleted.filter(task => task.id === id))
      })
    );
  }

  deleteForever(id) {
    this.setState(prevState =>
      ({
        deleted: prevState.deleted.filter(task => task.id !== id)
      })
    );
  }

  render() {
    return ( <div className = "container" >
      <AddTaskForm handleChange = {
        this.handleChange
      }
      handleSubmit = {
        this.handleSubmit
      }
      value = {
        this.state.value
        }
      /> <TaskList tasks={
        this.state.tasks
      }
      toggleComplete = {
        this.toggleComplete
      }
      deleteTask = {
        this.deleteTask
      }
      /> <Separator / >
      <
      DeletedTaskList tasks = {
        this.state.deleted
      }
      undoDelete = {
        this.undoDelete
      }
      deleteForever = {
        this.deleteForever
      }
      /> </div>
    );
  }
}

export default App;