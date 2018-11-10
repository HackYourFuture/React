import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


class AddTodo extends React.Component {
    state = {
        description: '',
        deadline: '',
        done: false,

    }
    newTodo = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }
    newDate = (date) => {
        this.setState({
            deadline: date.format("YYYY-MM-DD"),
        })
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            description: '',
            deadline: '',
            done: false,

        })
    }
    render() {
        return (
            <div className="newitem">
                <form onSubmit={this.submit}>
                    <span className="add">Add todo</span>
                    <div >
                        <span>Enter description : </span>
                        <input type='text'
                            className="newtodo"
                            id='description'
                            onChange={this.newTodo} />
                        <div><span>Deadline</span></div>
                        <DatePicker
                            className="newdeadline"
                            dateFormat="YYYY-MM-DD"
                            onChange={this.newDate}
                        />

                    </div>

                    <button>Add</button>
                </form>
            </div>
        )
    }
}
export default AddTodo 