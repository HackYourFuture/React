import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { inject, observer } from 'mobx-react';

@inject('todoStore')
@observer
class TodoAdd extends Component {

    render() {
        const {
            _id,
            description,
            deadline,
            done
        } = this.props.todoStore.defaultValue;
        const {
            onChangeState,
            handleDateStateChange,

        } = this.props.todoStore;
        return (
            <div className='todoAdd'>
                <div className="textArea">
                    <textarea
                        placeholder='description'
                        type='text'
                        value={description}
                        onChange={(element) => onChangeState('description', element.target.value)}
                    />
                </div>
                <div className="datePicker">
                    <DatePicker
                        selected={deadline}
                        onChange={handleDateStateChange}
                    />
                </div>
                <div className="addButton">
                    <button onClick={() => this.props.todoStore.onAddFunction(_id, description, deadline, done)}>Add</button>
                </div>
            </div>
        )
    }
}

export default TodoAdd;