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
          description: event.target.value,
          deadline: this.state.deadline,
          done: false
      })
    }

    handleDeadline (event) {
        this.setState({
            description: this.state.description,
            deadline: event.target.value,
            done: false
        })
    }

    handleSubmit (event) {
        event.preventDefault();
    }


    render () {
        const {addNewTodo} = this.props;

        return(
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTodo description" type="text" onChange={this.handleDescription} placeholder=" what to do"/>
                    <input className="inputTodo deadline" type="text" onChange={this.handleDeadline} placeholder=" when to do (yyyy-mm-dd)"/> 
                    <button className="inputTodo myButton" type="submit" onClick={()=>addNewTodo(this.state)}>Add</button>
                </form>
        )
    }
}

export default Add;