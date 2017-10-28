import React, {Component} from 'react';
import Add from './AddToDo.js';
import List from './List.js';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            newDescription: ''
        };
    }
    handleNewToDoInputChange = (event) => {
        this.setState({
            newDescription: event.target.value
        });
    }
    handleAddToDo = () => {
        const newToDo = this.state.newDescription;
        if (newToDo) {
            this.setState({
                toDos: this.state.toDos.concat({
                    description: newToDo,
                    done: false,
                    toDoStatus: 'normal'
                }),
                newDescription: ''
            });
        }
    }
    handleUpdateToDo = (index, property1, newValue1, property2, newValue2) => {
        const tempObject = {};
        tempObject[property1] = newValue1;
        if (property2) {
            tempObject[property2] = newValue2;
        }
        this.setState({
            toDos: this.state.toDos.slice(0, index).concat(
                Object.assign({},
                    this.state.toDos[index],
                    tempObject
                ),
                this.state.toDos.slice(index + 1)
            )
        });
    }
    handleDone = (index, checked) => {
        this.handleUpdateToDo(index, 'done', checked);
    }
    handleChangeToNormalItem = (index) => {
        this.handleUpdateToDo(index, 'toDoStatus', 'normal');
    }
    render() {
        return (
        <div>
            <Add 
                newDescription = {
                this.state.newDescription
            }
            handleNewToDoInputChange = {
                this.handleNewToDoInputChange
            }
            handleAddToDo = {
                this.handleAddToDo
            }
            /> 
            <List 
                  toDos = {
                this.state.toDos
            }
            handleDone = {
                this.handleDone
            }
            
            handleChangeToNormalItem = {
                this.handleChangeToNormalItem
            }
            /> 
        </div>);
        }

    }