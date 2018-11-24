import React from "react";

class Update extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            description: props.text,
            deadline: props.date
        }
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDeadline = this.handleDeadline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDescription (event) {
      this.setState({
          description: event.target.value,
      })
    }

    handleDeadline (event) {
        this.setState({
            deadline: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
    }


    render () {
        const {id, updateTodo} = this.props;

        return(
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTodo description" type="text" onChange={this.handleDescription} value={this.state.description}/>
                    <input className="inputTodo deadline" type="text" onChange={this.handleDeadline} value={this.state.deadline.substr(0, 10)}/> 
                    <button className="inputTodo myButton" type="submit" onClick={()=>updateTodo('update', id, this.state)}>update</button>
                    <button className="inputTodo myButton" type="submit" onClick={()=>updateTodo('cancel')}>cancel</button>
                </form>
        )
    }
}

export default Update;