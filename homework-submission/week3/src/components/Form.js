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
         <div className="head-container">
            <form onSubmit={this.onSubmit} className="form">

               <label className="input-container">
                  <p className="input-d">Description: </p>
                  <input className="input-bar" name="description" type="text" value={this.state.Description} onChange={this.onValueChange} />
               </label>

               <label className="input-container">
                  <p className="input-d">Deadline: </p>
                  <input className="input-bar" name="deadline" type="date" value={this.state.Deadline} onChange={this.onValueChange} />
               </label>

               <label className="button">
                  <button className="edit-button">Add</button>
               </label>

            </form>
         </div>
      )
   }
}

export default Form;