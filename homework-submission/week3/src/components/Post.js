import React, { Component } from 'react';

class Post extends Component {

   state = {
      description: "",
      editMode: false
   }

   onValueChange = (e) => {
      const todo = e.target.name
      this.setState({ [todo]: e.target.value });
   }

   onUpdate = () => {
      this.props.onUpdate(this.state.description, this.props.index);
      this.setState({ editMode: false });
   };

   handelDelete = () => {
      this.props.onDelete()
      this.setState({ editMode: false });
   }

   render() {
      return (
         this.state.editMode ?
            <div>
               <input type="checkbox" className="checkbox" checked={this.props.item.completed} onChange={() => this.props.checkedTodo(this.props.index)} />
               <input className="edit-bar" name="description" type="text" defaultValue={this.props.item.description} onChange={this.onValueChange} />
               <label className="button">
                  <button className="edit-button" onClick={this.onUpdate}>Update</button>
               </label>
               <label className="button">
                  <button className="edit-button" onClick={() => this.setState({ editMode: false })} >cancel</button>
               </label>
               <label className="button">
                  <button className="edit-button" onClick={this.handelDelete} >Delete</button>
               </label>
            </div >
            :
            <div className="todo-item">
               <input type="checkbox" className="checkbox" checked={this.props.item.completed} onChange={() => this.props.checkedTodo(this.props.index)} />
               <h2 className={this.props.item.completed ? "checked" : ""}> {this.props.item.description}  </h2>
               <p className="deadline">{this.props.item.deadline}</p>
               <label className="button">
                  <button className="edit-button" onClick={() => this.setState({ editMode: true })} >Edit</button>
               </label>
               <label className="button">
                  <button className="edit-button" onClick={() => this.props.onDelete()} >Delete</button>
               </label>
            </div>
      );
   }
}

export default Post; 