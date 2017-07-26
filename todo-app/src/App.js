import React, { Component } from 'react';
import Header from './Header.js';
import List from './List.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            clearIsClicked: false,
            newDescription: ''
        };
    }
    render() {
        return(<div>
            <Header
                clearIsClicked = {this.state.clearIsClicked}
                newDescription = {this.state.newDescription}
                handleNewToDoInputChange = {this.handleNewToDoInputChange}
                handleAddToDo = {this.handleAddToDo}
                handleAskToClear = {this.handleAskToClear}
                handleClear = {this.handleClear}
            />
            <List
                toDos = {this.state.toDos}
                handleDone = {this.handleDone}
                handleAskToEdit = {this.handleAskToEdit}
                handleAskToRemove = {this.handleAskToRemove}
                handleUpdateDescription = {this.handleUpdateDescription}
                handleRemoveToDo = {this.handleRemoveToDo}
                handleChangeToNormalItem = {this.handleChangeToNormalItem}
            />
        </div>);
    }
    handleNewToDoInputChange = (event) => {
        this.setState({newDescription: event.target.value});
    }
    handleAddToDo = () => {
        const newToDo = this.state.newDescription;
        if (newToDo) {
            this.setState({
                toDos: this.state.toDos.concat({
                    description: newToDo,
                    done: false,
                    toDoStatus: 'normal'}),
                newDescription: ''
            });
        }
    }
    handleAskToClear = () => {
        if(this.state.toDos.length > 0 || this.state.clearIsClicked) {
            this.setState({clearIsClicked: !this.state.clearIsClicked});
        }
    }
    handleClear = () => {
        this.setState({
            toDos: [],
            clearIsClicked: false
        });
    }
    handleUpdatSepecificToDo = (index, property1, newValue1, property2, newValue2) => {
        const tempObject = {};
        tempObject[property1] = newValue1;
        if(property2) {
            tempObject[property2] = newValue2;
        }
        this.setState({
            toDos: this.state.toDos.slice(0, index).concat(
                Object.assign(
                    {},
                    this.state.toDos[index],
                    tempObject
                ),
                this.state.toDos.slice(index + 1)
            )
        });
    }
    handleDone = (index, checked) => {
        this.handleUpdatSepecificToDo(index, 'done', checked);
    }
    handleAskToEdit = (index) => {
        this.handleUpdatSepecificToDo(index, 'toDoStatus', 'edit');
    }
    handleAskToRemove = (index) => {
        this.handleUpdatSepecificToDo(index, 'toDoStatus', 'remove');
    }
    handleUpdateDescription = (index, description) => {
        this.handleUpdatSepecificToDo
            (index, 'description', description, 'toDoStatus', 'normal');
    }
    handleRemoveToDo = (index) => {
        this.setState({
            toDos: this.state.toDos.slice(0, index).concat(
                this.state.toDos.slice(index + 1))
        });
    }
    handleChangeToNormalItem = (index) => {
        this.handleUpdatSepecificToDo(index, 'toDoStatus', 'normal');
    }
}