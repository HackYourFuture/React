import React, { Component } from 'react';
import ToDoForm from './components/form.js';
import ToDoInput from './components/input.js';
import IntroText from './components/intro.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        {
          description: 'Get out of bed',
          deadline: '2017-09-11',
          done: true,
        },
        {
          description: 'Brush teeth',
          deadline: '2017-09-10',
          done: false,
        },
        {
          description: 'Eat breakfast',
          deadline: '2017-09-09',
          done: false,
        },
      ],
      addToDo: {
        description: '',
        deadline: '',
        done: false,
      },
    };
  }

  changeToDoStatute = index => {
    const { toDos } = this.state;
    const newToDos = toDos.map((toDo, i) => {
      if (index === i) {
        toDo.done = !toDo.done;
      }
      return toDo;
    });
    this.setState({ toDos: newToDos });
  };

  deleteItem = index => {
    const { toDos } = this.state;
    const newToDos = toDos.filter((toDo, i) => {
      return index !== i;
    });
    this.setState({ toDos: newToDos });
  };

  handleChange = event => {
    event.preventDefault();
    const { addToDo } = this.state;
    const { name, value } = event.target;
    addToDo[name] = value;
    this.setState({ addToDo: addToDo });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { toDos, addToDo } = this.state;
    toDos.push({ ...addToDo });
    this.setState({ toDos: toDos });
  };

  render() {
    const toDos = this.state.toDos;

    return (
      <React.Fragment>
        Ad a to-do:
        <ToDoForm handleSubmit={this.handleSubmit}>
          <ToDoInput
            name="description"
            type="text"
            placeholder="Enter a to-do description"
            label="description"
            handleChange={this.handleChange}
          />
          <ToDoInput
            name="deadline"
            type="date"
            placeholder="Enter a to-do deadline"
            label="deadline"
            handleChange={this.handleChange}
          />
          <ToDoInput
            type="submit"
            name="button"
            value="here is a to-do save button"
            buttonTitle="Save"
          />
        </ToDoForm>
        <h1>ToDo List</h1>
        {toDos.map((detail, index) => {
          return (
            <div>
              <IntroText
                details={detail}
                handleDone={() => this.changeToDoStatute(index)}
                handleDelete={() => this.deleteItem(index)}
                crossedClassName={detail.done ? 'crossed' : ''}
                index={index + 1}
              />
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default App;
