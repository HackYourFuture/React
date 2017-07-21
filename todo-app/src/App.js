import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

  class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
          todos: [
               {
                description: "Read more about React",
                done:        true
               } ,
               {
              description: "Do the homework",
               done:        false
              },
            ],
          newToDo:{
            description: "",
            done:        false
           }
        }

    }

    handleSubmit(event){
      event.preventDefault()
      const {newToDo} = this.state  
      const todos = [...this.state.todos, newToDo]
      this.setState({todos})
      document.getElementById("addItem").reset();
      }

    handleChange(event){
      this.setState({
        newToDo: {
          description: event.target.value,
          done: false
        }
      })
    }

    renderAddItem (){
      return(
        <div>
          <form id="addItem" onSubmit={this.handleSubmit.bind(this)}>
            <input type="submit" value="Add" />
            <input type="text"  onChange={this.handleChange.bind(this)}/>
          </form>
        </div>
      )
    }

    onDelete= (index) => {
      const todosList = this.state.todos
      todosList.splice(index, 1)
      this.setState({todosList})
    }



    handleCheckBoxChange = (index) => {
      const todosList = this.state.todos
      todosList[index].done = !todosList[index].done;
      this.setState({
        todosList
      });
    }

    save = (editToDo,index) => {
      const todosList = this.state.todos
      todosList[index] = editToDo
      this.setState({
        todosList
        });
    }

    render() {
      let todoList=this.state.todos
      todoList= todoList.map(function(item,index){
        return( <List  description={item.description}
          done ={item.done}
          key={index} index={index}
          onDelete={this.onDelete}
          handleCheckBoxChange={this.handleCheckBoxChange}
          save={this.save}
        />);
      }.bind(this))
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>To Do List</h2>
          </div>
          <div className= "App-Body">
          {todoList}
          {this.renderAddItem()}
          </div>
          </div>
      );
    }

  }

  export default App;
