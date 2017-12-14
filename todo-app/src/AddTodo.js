import React from 'react';

export default class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: {}
        }
    }
    static defaultProps = {
        status: ["Done", "Not Done"]
    }
    handleSubmit(event){
    if(this.refs.todo.value === ''){
      alert('Please add a Todo');
    } else {
      this.setState({newTodo:{
        text: this.refs.todo.value,
        status: this.refs.status.value
      }}, function(){
        console.log(this.state);
        this.props.addTodo(this.state.newTodo);
      });
    }
    event.preventDefault();
  }
    render() {
        let statusOptions = this.props.status.map(status => {
            return <option key={status} value={status}>{status}</option>
        })
        return (
            <div>
                <h3>Add Todo</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Todo item</label> <br />
                        <input type="text" ref="todo" />
                    </div>
                    <div>
                        <label>Todo status</label> <br />
                        <select ref="status">
                            {statusOptions}
                        </select>
                    </div>
                    <br />
                    <input type="submit" value="Add" />
                    <br />
                </form>
            </div>
        )
    }
}