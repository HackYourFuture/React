import React from 'react';
import './App.css';

 export default class ListItem extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      showEdit: true,
      editToDo: {
        description: props.description,
        done: false
      }
    }

  }

  Edit(showEdit) {
    if (!showEdit) {
      return (
        <div className='item-name'>
        <form id="addItem"  onSubmit={this.handelsave.bind(this)}>
          <input type="text" value={this.state.editToDo.description} onChange={this.handleTextChange.bind(this)}/>
          <input type="submit" value="Save" />
          <button type="button" onClick={this.handelTextClick.bind(this)} > Cancel </button>
        </form>
      </div>
      );
    } else {
        return (
          <div className='item-name'>
          <input type="checkbox"
            name="listItem"
            checked={this.props.done}
            onChange={()=>{this.props.handleCheckBoxChange(this.props.index)}}
            />
          <span onClick={this.handelTextClick.bind(this)}>{this.props.description} ... </span>
          <button type="button" onClick={()=>{this.props.onDelete(this.props.index)}} > Delete </button>
          </div>
        )
      }
  }

handleTextChange(event){
  this.setState({
    editToDo: {
      description: event.target.value,
      done: this.props.done
    }
  })
}

handelsave(event){
  event.preventDefault()
  this.props.save(this.state.editToDo, this.props.index)
  this.handelTextClick()
}

handelTextClick(){
  this.setState(prevState => ({
      showEdit: !prevState.showEdit
    }));
}
   render() {

     return (
       <div >
       {this.Edit(this.state.showEdit)}
      </div>
     )
   }

}
