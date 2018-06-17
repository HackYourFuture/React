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
                        index={i} />
                </div>
            )


        })

        return (

            <div className="content">
                {(this.state.data.length > 0) ? renderItems : <h2>No items...</h2>}
            </div>

        );
    }
}

export default TodoItems;
