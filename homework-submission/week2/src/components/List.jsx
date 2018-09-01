import React from "react";
import Checkbox from './Checkbox';
import TodoItem from './TodoItem';

export default class List extends React.Component {
    render(){
        return (
        <ul className={this.props.Title}>
            {this.props.todoItems.map(item => (
                <div key={"wrapper" + item.id}>
                    <Checkbox
                        type="checkbox"
                        done={item.done}
                        handleChecked={this.props.handleChecked}
                        id={item.id}
                    />
                    <TodoItem
                        id={item.id}
                        description={item.description + " deadLine: " + item.deadline}
                    />
                </div>
            ))}
        </ul>
        );
    }
}