import React from 'react';
import info from './info';
import Done from './Done-action';


export default class Tasks extends React.Component {
    render() {
        const { text, done } = this.props.task;
        return (
            <div>
                <div>
                    <info text={text} />
                </div>
                <div>
                    <Done done={done} />
                </div>
            </div>
        );
    }
}