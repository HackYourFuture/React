import React, { Component } from 'react';
import "../App.css";
import { observer, inject } from 'mobx-react';
//import DatePicker from 'react-datepicker';

@inject('todostore')
@observer
class TodosForm extends Component {

    render() {
        const {

            description,
            deadline

        } = this.props.todostore.defaultValue;
        const { onChanging } = this.props.todostore;
        const { completedTodosCount } = this.props.todostore;
        const { todosCount } = this.props.todostore;

        return (
            <div>
                <div className="computedArea"> <span>Number of Todo-Items: {todosCount}</span>
                    <span>Number of Completed Todo-Items: {completedTodosCount}</span></div>
                <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Description :</p>
                    <textarea className="textArea" placeholder="write the new todo here "
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => onChanging("description", e.target.value)}
                    />
                </div>
                <div>
                    <p style={{ "color": "blue", "fontSize": "20px" }}>Dead Line Date : </p>
                    <input className="textArea" placeholder="write the deadline here "
                        type="date"
                        name="deadline"
                        value={deadline}
                        onChange={(e) => onChanging("deadline", e.target.value)}
                    />

                </div>
                <div>
                    <button className="buttonStyle"
                        onClick={() => this.props.todostore.onAddFunction(description, deadline)}

                    >
                        Add
                    </button>
                    <br /> <br />
                </div>
            </div>

        );
    }
};
export default TodosForm;