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

    onAdd = (event) => {
        event.preventDefault()
        const description = prompt("What is the description of to do?")
        const deadline = prompt("what is the deadline")
        const done = prompt("was it done?")
        this.save(description, deadline, done, this.state.data.length)

    }
    save = (description, deadline, index) => {
        const newToDo = { description, deadline }
        const toDos = [...this.state.data]
        toDos[index] = newToDo
        this.setState({ data: toDos })
    }
    onDelete = (index) => {
        const todosList = [...this.state.data]
        todosList.splice(index, 1)
        this.setState({ data: todosList })
    }
    handleChangeCheckBox = (index) => {
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

                    <Checkbox isDone={element.done} handleChangeCheckBox={this.handleChangeCheckBox}
                        index={i} onDelete={this.onDelete}
                        description={element.description}
                        deadline={element.deadline}
                        done={isDone}
                        save={this.save} />

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
