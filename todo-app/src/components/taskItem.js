import React, { Component } from "react";
import "../style.css"
import PropTypes from "prop-types"
import Trash from "react-icons/lib/fa/trash"
import Edit from "react-icons/lib/fa/edit"


export default class TaskItem extends Component {
    static propTypes = {
        description: PropTypes.string,
        deadLine: PropTypes.string
    }
    render() {
        let description = this.props.description;
        let deadLine = this.props.deadLine
        return (
            <div className="tasks">    
                <li>
                    <div>
                        Description : {description}.
                        <br />
                        <br />
                        Dead Line : {deadLine}.
                   </div>
                </li>
                <div className="tools">
                    <button className="remove-button"><Trash /></button>
                    <button className="edit-button"><Edit /></button>
                </div>

            </div>
        )
    }
}

