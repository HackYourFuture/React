import React from 'react';
import Description from './Description';
import Status from './Status';
import './tasks.css';

export default class Task extends React.Component {
    render() {
        const { text, done } = this.props.task;
        return (
            <div className='task'>
                * 
                <div className='text'>
                    <Description text={text} />
                </div>
                <div className='status'>
                    <Status done={done} />
                </div>
            </div>
        );
    }
}
