import React, { Component } from 'react';
import "../App.css";
import { observer, inject } from 'mobx-react';

@inject('todostore')
@observer
class TodosForm extends Component {

    render() {
        const { description, deadline } = this.props;
        const { onChanging } = this.props.todostore;
        const { onSubmitAdd } = this.props.todostore;
        const { completedTodosCount } = this.props.todostore;
        const { todosCount } = this.props.todostore;

        return (
            <form onSubmit={(e) => onSubmitAdd(e)}>
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
                    <button className="buttonStyle">
                        Add
                    </button>
                    <br /> <br />
                </div>

            </form>
        );
    }
};
export default TodosForm;