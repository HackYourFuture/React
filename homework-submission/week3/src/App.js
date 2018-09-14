import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import List from './components/List';
import Button from './components/Button';
import InputField from './components/InputField';
import Checkbox from './components/Checkbox';
import TodoItem from './components/TodoItem';
import TodoItems from './sources/todoItems.json';

class App extends Component {
  constructor(props){
    super(props);
    const items = localStorage.items
      ? JSON.parse(localStorage.items)
      : TodoItems;
    this.state = {
      items,
      newItem: {
        newId: items[items.length - 1].id + 1,
        newDescription: '',
        newDeadline: '',
      }
    }
  }

  handleChecked = id => {
    let newItems = this.state.items.map(item => {
      if (item.id === id) {
        return {...item, done: !item.done};
      }
      return item;
    });
    localStorage.setItem('items', JSON.stringify( newItems ));
    this.setState({ items: newItems });
  }

  handleSubmit = () => {
    const toSubmitItem = {
      id: this.state.newItem.newId,
      description: this.state.newItem.newDescription,
      deadline: this.state.newItem.newDeadline,
      done: false,
      editable: false
    };

    let newState = this.state;

    newState.items.push(toSubmitItem);
    newState.newItem.newId = newState.items[newState.items.length - 1].id + 1;
    newState.newItem.newDescription = '';
    newState.newItem.newDeadline = '';

    localStorage.setItem('items', JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleDescriptionChange = (newDescription) => {
    let newState = this.state;
    newState.newItem.newDescription = newDescription;
    localStorage.setItem('items', JSON.stringify(newState.items));
    this.setState(newState);
  };

  handleDeadLineChange = (value) => {
    let newState = this.state;
    newState.newItem.newDeadline = value;
    localStorage.setItem('items', JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleRemove = (id) => {
    id = parseInt(id, 10);
    const newItems = this.state.items.filter(item => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newItems));
    this.setState({ items: newItems });
  }

  handleEdit = (id) => {
    id = parseInt(id, 10);
    const newItems = this.state.items.map(item => {
        if (item.id === id) {
          return {...item, editable: !item.editable};
        }
        return item;
      });
    localStorage.setItem('items', JSON.stringify(newItems));
    this.setState({ items: newItems });
  }

  handleUpdate = (id) => {
    id = parseInt(id, 10);

    let newState = this.state;

    newState.items = newState.items.map(item => {
      if (item.id === id) {
        return { 
          ...item, 
          description: 
            newState.newItem.newDescription === '' 
            ? item.description 
            : newState.newItem.newDescription, 
          deadline: 
            newState.newItem.newDeadline === ''
            ? item.deadline
            : newState.newItem.newDeadline, 
          editable: false 
        };
      }
      return item;
    });
    newState.newItem.newId = newState.items.length + 1;
    newState.newItem.newDescription = '';
    newState.newItem.newDeadline = '';

    localStorage.setItem('items', JSON.stringify(newState.items));
    this.setState(newState);
  }

  handleCancel = (id) => {
    id = parseInt(id, 10);

    let newState = this.state;

    newState.items = newState.items.map(item => {
      if (item.id === id) {
        return { ...item, editable: !item.editable };
      }
      return item;
    });
    newState.newItem.newId = newState.items[newState.items.length - 1].id + 1;
    newState.newItem.newDescription = '';
    newState.newItem.newDeadline = '';
  
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <header className='App-header'>
          <img
            src='https://russellinvestments.com/-/media/images/au/tiles/todolist.png'
            className='App-logo'
            alt='logo'
          />
          <ListHeader className='todo-list' Title='Todo List' />
        </header>
        <div className='new-input'>
          <InputField
            type='text'
            label='Description:'
            placeholder='enter description'
            value={this.state.newItem.newDescription}
            handleChange={this.handleDescriptionChange}
          />
          <InputField
            type='date'
            label='Deadline:'
            value={this.state.newItem.newDeadline}
            handleChange={this.handleDeadLineChange}
          />
          <Button type='submit' action='Add' handleClick={this.handleSubmit} />
        </div>
        <List
          title='todo-list'
          content={this.state.items.map(item => (
            <div key={'wrapper' + item.id}>
              <Checkbox
                type='checkbox'
                done={item.done}
                handleChecked={this.handleChecked}
                id={item.id}
              />
              <TodoItem
                id={item.id}
                contentEditable={item.editable}
                description={item.description}
                date={item.deadline}
                newDescription={this.state.newItem.newDescription}
                newDate={this.state.newItem.newDeadline}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDeadLineChange={this.handleDeadLineChange}
              />
              <Button
                key={'edit' + item.id}
                id={item.id}
                action='Edit'
                handleClick={this.handleEdit}
                className='show'
              />
              <Button
                key={'update' + item.id}
                id={item.id}
                action='update'
                handleClick={this.handleUpdate}
                className={item.editable? 'show' : 'hide'}
              />
              <Button
                key={'cancel' + item.id}
                id={item.id}
                action='Cancel'
                handleClick={this.handleCancel}
                className={item.editable? 'show' : 'hide'}
              />
              <Button
                key={'remove' + item.id}
                id={item.id}
                action='Remove'
                handleClick={this.handleRemove}
                className='show'
              />
            </div>
          ))}
        />
      </React.Fragment>
    );
  }
}

export default App;
