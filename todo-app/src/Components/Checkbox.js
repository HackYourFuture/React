import React, { Component } from 'react';

export default class Checkbox extends Component {

    render() {
        const {
            description,
            selected,
            index,
            handelSelected
        } = this.props
        return (
            <div key={index}>
                <input type="checkbox"
                    onChange={() => handelSelected(index)}
                    defaultChecked={selected}
                />  {description} 
            </div>

        )
    }
}