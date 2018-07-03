import React, { Component } from 'react';
import "../App.css";
import { observer, inject } from 'mobx-react';

@inject('todostore')
@observer
class TodosForm extends Component {

    render() {
        const styleDiv = { "color": "blue", "fontSize": "20px" }
        const {
            description, deadline, todostore: {
                onChanging, onSubmitAdd, completedTodosCount, todosCount
            } } = this.props;

        return (
            <form onSubmit={(e) => onSubmitAdd(e)}>
                <div className="computedArea"> <span>Number of Todo-Items: {todosCount}</span>
                    <span>Number of Completed Todo-Items: {completedTodosCount}</span></div>
                <div>
                    <p style={styleDiv}>Description :</p>
                    <textarea className="textArea" placeholder="write the new todo here "
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => onChanging("description", e.target.value)}
                    />
                </div>
                <div>
                    <p style={styleDiv}>Dead Line Date : </p>
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