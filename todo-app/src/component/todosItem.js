import React from 'react';
import Fade from 'react-reveal/Fade';

export default class TodosItem extends React.Component {

    render() {
        const {
            todo,
            isDone,
            index,
            handelCheck
        } = this.props

        return (
            <div key={index}>
                <input type="checkbox"
                    onChange={() => handelCheck(index)}
                    defaultChecked={isDone}
                />
                    <span style={{ textDecorationLine: isDone ? 'line-through' : 'none' }}>
                        {todo.description}
                    </span>
                <Fade left cascade>
                    <span className="deadline">
                        {todo.deadline}
                    </span>
                </Fade>
            </div>
        );
    }
}

