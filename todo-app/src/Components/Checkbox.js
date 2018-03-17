import React, { Component } from 'react';

export default class Checkbox extends Component {

    render() {
        const {
            id,
            description,
            selected,
            handelSelected
        } = this.props
        return (
            <div key={id}>
                <input type="checkbox"
                    onChange={() => handelSelected(id)}
                    defaultChecked={selected}
                />  {description} 
            </div>

        )
    }
}