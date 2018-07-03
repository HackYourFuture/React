import React, { Component } from "react";
import TodosItem from "./TodosItem";
import "../App.css";
import uuid from 'uuid/v4';
import TodosForm from './TodosForm';
import '../App.css';
import { observer, inject } from 'mobx-react';

@inject('todostore')

@observer
class TodosList extends Component {

    componentDidMount() {
        this.props.todostore.getTodos()

    }
    render() {

        const todoList = this.props.todostore.listTodo;
        const NO_ITEM = !(todoList && todoList.length > 0)
        const todoListItem = todoList.map((element =>
            <TodosItem
                key={uuid()}
                _id={element._id}
                description={element.description}
                deadline={element.deadline}
                done={element.done}
                handleCheckBox={this.props.handleCheckBox}
                removeTodo={this.props.removeTodo}
            />
        ));
        return (
            <div>

                <div>
                    {
                        (NO_ITEM) ? <h1 className="comment"> NO ITEM !!! </h1> : null
                    }
                </div>
                <TodosForm />
                {todoListItem}

            </div>
        );
    }
};
export default TodosList;