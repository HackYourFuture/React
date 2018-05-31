import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
@inject('todos')
@observer

export default class Todo extends Component {
    componentDidMount() {
        this.props.todos.getTodos()

    }

    render() {
        const { deadline, Description, remove, handelCheck, onsubmit, handelChangeDescripton, handelChangeDate } = this.props.todos;
        return (
            <div className="root">
                <form onSubmit={(e) => onsubmit(e)}>
                    <input value={Description} onChange={handelChangeDescripton} name="Description" placeholder=" enter your task" type="text" className="text" />
                    <input value={deadline} onChange={handelChangeDate} type="date" name="deadline" className="date" />
                    <button type="submit" >Add</button>
                </form>
                {this.props.todos.tasks.map((ele, index) =>
                    <div className="task" key={ele._id}>
                        <p>{ele.description}</p>
                        <p><strong>{ele.deadline}</strong></p>
                        <label> {ele.done === true ? "Done" : "not Done"} <input className="checkbox" type="checkbox" defaultChecked={ele.done ? true : false} onChange={(e) => handelCheck(e, ele._id)} /> </label>
                        <button className="close" onClick={(e) => remove(e, ele._id)} >X</button>
                    </div>
                )}
            </div>
        )
    }
}

