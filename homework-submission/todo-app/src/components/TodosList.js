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
        const { listTodo } = this.props.todostore
        const NO_ITEM = !(listTodo && listTodo.length > 0)
        const activities = this.props.todostore.listTodo;
        const todoListItem = activities.map((element, index) =>
            <TodosItem
                id={element.id}
                description={element.description}
                deadline={element.deadline}
                done={element.done}
                key={uuid()}
                index={index}
            />
        );
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