import React from "react";

class TodoItem extends React.Component {
    state = {
        id: this.props.id,
        description: this.props.description,
        deadline: this.props.deadline,
        done: this.props.done
    }

    handleChange = () => {
        (!this.state.done) ? this.setState({ done: true }) : this.setState({ done: false });
    }

    render() {
        console.log("render " + this.state.done)
        return (
            <li className='todoItem' >
                <input className="checkbox" type="checkbox" onChange={this.handleChange} value={this.state.done} checked={!this.state.done ? true : false}
                />
                <p className={!this.state.done ? "lineThrough" : ''}>{this.state.id + ' ' + this.state.description} {' DeadLine: ' + this.state.deadline} </p>
            </li>
        )
    }

}
export default TodoItem

