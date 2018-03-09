import React from 'react';
import TodosItem from './todosItem';
import Fade from 'react-reveal/Fade';

export default class TodosList extends React.Component {

    render() {
        const {
            todos,
            handelCheck
        } = this.props

        const todoList = todos.map((item, index) => {
            return (
                <Fade key={item.id}>
                    <li className="todoList"  >
                        <TodosItem todo={item}
                            index={index}
                            isDone={item.done}
                            handelCheck={handelCheck}
                        />
                    </li>
                </Fade>
            )
        })
        return (
                <ul className="todosItem">
                    {todoList}
                </ul>
            
        );
    }
}

