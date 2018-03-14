import React from "react";
import dbTodos from '../todo.json';
import TodoList from './todoList';
import TodoForm from './todoForm';
import Footer from './footer';
import moment from 'moment';


export default class Todos extends React.Component {
    state = {
        description: '',
        deadline: moment().format('YYYY-MM-DD'),
        todos: dbTodos,
    }
    handelCheck = (index) => {
        const todos = this.state.todos;
        todos[index].done = !todos[index].done;
        this.setState({
            todos
        })
    }
    handelDeleteItem = (todo) => {
        this.setState({
            todos: this.state.todos.filter((item) => {
                return item.id !== todo.id
            })
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        });
    }
    handleDateChange = (event) => {
        this.setState({
            deadline: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const todos = this.state.todos;
        const ids = this.state.todos.map((todo) => { return todo.id });
        const newId = Math.max(...ids) + 1
        const newTodo = {
            "id": newId,
            "description": this.state.description,
            "deadline": this.state.deadline,
            "done": false
        };
        if (!newTodo.description) {
            alert('Please enter new todo');
            return;
        } else {
            this.setState({
                todos: [ newTodo,...todos ],
                description: '',
                deadline: moment().format('YYYY-MM-DD')
            });
        }
    }

    render() {
        const hasTodos = this.state.todos.length > 0;
        return (
            <div className="todosContainer">
                <h3>Todo-List</h3>
                <TodoForm description={this.state.description}
                    deadline={this.state.deadline}
                    handleDescriptionChange={this.handleDescriptionChange}
                    handleDateChange={this.handleDateChange}
                    handleSubmit={this.handleSubmit}
                />
                {hasTodos ? (
                    <TodoList todos={this.state.todos}
                        handelCheck={this.handelCheck}
                        handelDeleteItem={this.handelDeleteItem}
                    />
                ) : (
                        <div className="empty">
                            <h3>No items...</h3>
                        </div>
                    )}
                <Footer todos={this.state.todos}/>
            </div>

        );
    }
}
