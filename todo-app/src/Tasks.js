import React from 'react';
import Description from './Description';
import Done from './Done';
import './tasks.css';

export default class Tasks extends React.Component {
    render() {
        const { text, done } = this.props.task;
        return (
            <div className='task'>
                <div className='text'>
                    <Description text={text} />
                </div>
                <div className='status'>
                    <Done done={done} />
                </div>
            </div>
        );
    }
}
