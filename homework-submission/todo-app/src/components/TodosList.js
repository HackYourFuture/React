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


    render() {

        const todoList = this.props.todostore.listTodo;
        const NO_ITEM = !(todoList && todoList.length > 0) ? <h1 className="comment"> NO ITEM !!! </h1> : null
        const todoListItem = todoList.map((element =>
            <TodosItem
                key={uuid()}
                _id={element._id}
                description={element.description}
                deadline={new Date(element.deadline).toDateString()}
                done={element.done}
            />
        ));
        return (
            <div>

                <div>
                    {NO_ITEM}
                </div>
                <TodosForm />
                {todoListItem}

            </div>
        );
    }
    componentDidMount() {
        this.props.todostore.getTodos()

    }
};
export default TodosList;