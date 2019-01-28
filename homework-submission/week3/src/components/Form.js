import React, { Component } from "react"
const uuid = require('uuid');

class Form extends Component {

   state = {
      id: uuid(),
      description: "",
      deadline: "",
      completed: false
   }

   onValueChange = (e) => {
      const todo = e.target.name
      this.setState({ [todo]: e.target.value });
   }

   onSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      this.props.onFormSubmit(this.state)
   }

   render() {
      return (
         <form onSubmit={this.onSubmit} className="form">
            <label className="input-container">
               <p className="input-d">Description: </p>
               <input className="input-bar" name="description" type="text" value={this.state.Description} onChange={this.onValueChange} required />
            </label>

            <label className="input-container">
               <p className="input-d">Deadline: </p>
               <input className="input-bar-deadline" name="deadline" type="date" value={this.state.Deadline} onChange={this.onValueChange} required />
            </label>

            <label className="button">
               <button className="edit-button">Add</button>
            </label>
         </form>
      )
   }
}

export default Form;