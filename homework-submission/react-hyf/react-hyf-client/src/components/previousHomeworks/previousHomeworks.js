import React, { Component } from 'react';
import './style.css';
import Header from '../Header/Header';
import TasksList from '../TasksList/TasksList';
import TaskForm from '../TaskForm/TaskForm';

export default class PreviousHomeworks extends Component {
  state = {
    dynamicList: [
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: true,
      },
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: Math.floor(Math.random() * 9999 + 50),
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
    inputData: {
      id: Math.floor(Math.random() * 9999 + 50),
      description: '',
      deadline: '',
      done: false,
    },
  };

  onchangeHandler = event => {
    event.preventDefault();
    const inputData = { ...this.state.inputData };
    const { name, value } = event.target;
    inputData[name] = value;
    this.setState({ inputData });
  };

  addTask = event => {
    event.preventDefault();
    let inputData = this.state.inputData;
    inputData.id = Math.floor(Math.random() * 9999 + 50);
    this.setState(inputData);
    inputData = { ...this.state.inputData };
    const dynamicList = [...this.state.dynamicList];
    const today = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, '/');
    Date.parse(inputData.deadline) < Date.parse(today)
      ? alert('deadline can not be before today ...!!! ')
      : inputData.description.length > 30
      ? alert('description can not be more that 30 characters ...!!! ')
      : inputData.description && inputData.deadline
      ? dynamicList.push(inputData) && this.setState({ dynamicList })
      : alert('Please enter the task and the deadline !!!');
  };

  deleteTask = index => {
    const confirmMassage = `Do you want to delete this task : (${
      this.state.dynamicList[index].description
    }) ?`;
    if (global.confirm(confirmMassage)) {
      const newList = this.state.dynamicList.filter((item, itemIndex) => itemIndex !== index);
      this.setState({ dynamicList: newList });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="list">
          <TasksList data={this.state} deleteTask={this.deleteTask} />
          <TaskForm onchangeHandler={this.onchangeHandler} addTask={this.addTask} />
        </div>
      </React.Fragment>
    );
  }
}
