import React, { Component } from 'react';

export default class TodoItems extends Component {
    render() {
        const { description, deadline } = this.props;
        
        return (
            <div> 
                <tbody>
                    <tr>
                        <td className = "description">
                           { description }
                        </td>
                        <td className = "deadline">
                           { deadline }
                        </td>
                    </tr>
                </tbody>  
            </div>
        )
    }
}