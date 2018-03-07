import React from "react";
import ListItem from "./List-Item";

let todoItems = [];

export default class AddTodo extends React.Component {

    state = {
        description: "enter todo item",
        deadline: new Date(),
        done: false
    }

    handleTextChange = e => {
        const description = e.target.value;
        this.setState({ description });
    }

    handleDateChange = e => {
        const deadline = e.target.value;
        this.setState({ deadline });
    }

    // render new todo when Add button is clicked
    handleButtonClick = () => {
        const { description, deadline } = this.state;
        todoItems.push({ description, deadline, done: false });

        this.setState({ description, deadline });
    }

    render() {
        return (
            <section>
                {todoItems.map(todo => {
                    return <ListItem
                        key={todo.description}
                        todoItem={todo} />
                }
                )}
                <div id="form">
                    <h3>Add new todo item</h3>

                    <textarea value={this.state.description} onChange={this.handleTextChange} />

                    <input type="text" placeholder="MM-DD-YYYY" onChange={this.handleDateChange} />

                    <button onClick={this.handleButtonClick}>Add</button>  
                </div>    
            </section>
        );
    }
} 