import React, { Component } from "react";
import Checkbox from './Checkbox';
import TodoList from "./TodoList.json";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: TodoList
        }

    }
    state = {
        description: '',
        deadline: '',
        done: false
    }

    onAdd = (event) => {
        event.preventDefault()
        const description = prompt("What is the description of to do?")
        const deadline = prompt("what is the deadline")
        const done = prompt("was it done?")

        const newToDo = { description, deadline, done }
        const toDos = [...this.state.data, newToDo]
        this.setState({ data: toDos })
    }
    onDelete = (index) => {
        const todosList = [...this.state.data]
        todosList.splice(index, 1)
        this.setState({ data: todosList })
    }
    handleChangeChekBox = (index) => {
        const item = [...this.state.data]
        item[index].done = !item[index].done
        this.setState({ item })
    }
    render() {
        const renderItems = this.state.data.map((element, i) => {
            let isDone = 'Not Done'
            let doneClass = '';
            if (element.done) {
                isDone = 'Done'
                doneClass = 'done'
            }

            return (

                <div className={`comment ${doneClass}`} key={i}>
                    <h2>Description : {element.description}</h2>
                    <h2>Deadline : {new Date(element.deadline).toDateString()}</h2>
                    <h2> {isDone} </h2>
                    <Checkbox isDone={element.done} handleChangeChekBox={this.handleChangeChekBox}
                        index={i} onDelete={this.onDelete} />
                </div>
            )
        })
        return (
            <div className="content">
                <div className="comment">
                    {this.todoList}
                    <button type="button" onClick={this.onAdd}>Add</button>
                </div>
                {(this.state.data.length > 0) ? renderItems : <h2>No items...</h2>}

            </div>


        );
    }
}

export default TodoItems;
