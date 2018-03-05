import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class todoListItem extends Component {
    state = {
        checked: this.props.items.done
    }

    handelCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    render() {
        let taskStyle;
        let isDone;
        if (this.state.checked) {
            isDone = 'complete';
            taskStyle = {
                textDecorationLine: 'line-through',
                color: 'red'
            }
        }
        return (
            <div>
                <Fade left cascade>
                    <div className="todoList" key={this.props.items.id}>
                        <input type="checkbox"
                            onChange={this.handelCheck}
                            defaultChecked={this.state.checked} />
                        <span style={taskStyle}>{this.props.items.description}</span>
                        <small>{isDone}</small>
                        <span className="deadline">
                            {this.props.items.deadline}
                        </span>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default todoListItem;
