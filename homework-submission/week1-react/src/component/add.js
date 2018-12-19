import React from "react";

class Add extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            description: '',
            deadline: '',
            done: false
        }
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDeadline = this.handleDeadline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDescription (event) {
      this.setState({
          description: event.target.value
      })
    }

    handleDeadline (event) {
        this.setState({
            deadline: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState({
            description: '',
            deadline: ''
        })
        event.target.reset()     
    }

    render () {
        const {wrongInput} = this.props;

        return(
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTodo description" type="text" onChange={this.handleDescription} placeholder=" what to do"/>
                    <input className="inputTodo deadline" type="text" onChange={this.handleDeadline} placeholder=" when to do (yyyy-mm-dd)"/> 
                    <button className= {wrongInput ? "inputTodo wrongInput" : "inputTodo"} type="submit">Add</button>
                </form>
        )
    }
}

export default Add;