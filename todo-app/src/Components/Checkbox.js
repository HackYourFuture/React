import React, { Component } from 'react';

export default class Checkbox extends Component {

    render() {
        const {
            id,
            description,
            deadline,
            done,
            index,
            handelDoneStatus
        } = this.props
        return (
            <div key={index}>
                <input type="checkbox"
                    onChange={() => handelDoneStatus(index)}
                    defaultChecked={done}
                />  {id}- {description} {deadline}
            </div>

        )
    }
}