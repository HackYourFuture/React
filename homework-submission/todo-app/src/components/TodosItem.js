import React, { Component } from 'react';
import '../App.css';
import '../components/Image.css'
import Image from '../components/Image';

class TodosItem extends Component {
    constructor() {
        super();
        this.state = {
            editing: false
        }
    }
    componentDidMount() {

        this.setState({ changedText: this.props.todo.description });
    }
    handleEditing() {
        this.setState({ editing: true, changedText: this.props.description })
    }
    handleEditingDone(event) {

        if (event.keyCode === 13) {
            this.setState({ editing: false })
        }
    }
    handleEditingChange(event) {
        let _changedText = event.target.value;
        this.setState({ changedText: _changedText });
    }

    render() {

        let { id, deadline, done } = this.props.todo;
        let { toggleDone, removeTodo } = this.props;
        let viewStyle = {};
        let editStyle = {};
        if (this.state.editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        return (
            <div className="comment">

                <input
                    className="checkbox"
                    onClick={() => toggleDone(id)}
                    defaultChecked={done}
                    type="checkbox" />
                <Image className="App-image" />

                <span
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>
                    <h2 className="text">Task:
                    </h2>

                    <b>{this.state.changedText}</b>

                    <textarea
                        type="text"
                        onKeyDown={this
                            .handleEditingDone
                            .bind(this)}
                        onChange={this
                            .handleEditingChange
                            .bind(this)}
                        style={editStyle}
                        value={this.state.changedText} />
                </span>

                <span
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>
                    <h2 className="text">Dead Line:</h2>
                    <b>{deadline}</b>
                </span>
                <span className="removeStyle">
                    <button onClick={() => removeTodo(id)}>
                        Remove Todo
                    </button>
                </span>
                <span>
                    <button
                        style={viewStyle}
                        onClick={this
                            .handleEditing
                            .bind(this)}>
                        Edit Todo
                    </button>
                </span>

            </div>
        )
    }
};
export default TodosItem;