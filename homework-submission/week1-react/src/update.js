import React from "react";

class Update extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            description: '',
            deadline: ''
        }
        this.handleDescription = this.handleDescription.bind(this);
        this.handleDeadline = this.handleDeadline.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleDescription (event) {
      this.setState({
          description: event.target.value,
          deadline: this.state.deadline
      })
    }

    handleDeadline (event) {
        this.setState({
            description: this.state.description,
            deadline: event.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();
    }


    render () {
        const {text, date, index, updateTodo} = this.props;

        return(
                <form onSubmit={this.handleSubmit}>
                    <input className="inputTodo description" type="text" onChange={this.handleDescription} placeholder={text}/>
                    <input className="inputTodo deadline" type="text" onChange={this.handleDeadline} placeholder={date}/> 
                    <button className="inputTodo myButton" type="submit" onClick={()=>updateTodo('update', index, this.state)}>update</button>
                    <button className="inputTodo myButton" type="submit" onClick={()=>updateTodo('cancel')}>cancel</button>
                </form>
        )
    }
}

export default Update;