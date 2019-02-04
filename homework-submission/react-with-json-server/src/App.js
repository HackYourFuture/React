import React, { Component } from 'react';
import Util from './utility.js';
import Login from "./login-form.js";
import AddingForm from "./add-form.js";
import Photo from "./photo.js";


class App extends Component {

  state = {
    userName: "no user",
    login: false,
    users: []
  }

  getContent = () =>{
    Util.fetchJSON("http://localhost:4000/photos")
      .then(users => this.setState({ users })).catch(err => console.error(err));
  }

  componentDidMount() { this.getContent() }

  loginLogout = (e) => {
    if (e.target) {
      e.preventDefault();
      this.setState({ userName: e.target.userName.value });
    }
    this.setState({login: !this.state.login});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newPost = {
     
      photoUrl: e.target.url.value,
      author: this.state.userName,
      description: e.target.description.value,
      comment: [
        {
          author: "jalal",
          text: "I like the place"
        }
      ],
      like: [
        "jalal",
        "karam"
      ]
    }
    Util.postJSON("http://localhost:4000/photos", newPost)
      .then(res => this.getContent()).catch(err => console.error(err));
    e.target.reset()
  }


  render() {
    return (
      <div id="container">
        {this.state.login ? <AddingForm handleSubmit={this.handleSubmit}/> : <Login onLogin={this.loginLogout}/>}
        {this.state.login && this.state.users.map(user => <Photo key={user.id} user={user} />)}
      </div>
    );
  }
    
}
    
    export default App;
    
    
    
    
    
    
    
    
    
    /*
  componentDidMount() {
          Util.fetchJSON("https://hyf-react-api.herokuapp.com/todos")
            .then(todoList => {
              this.setState({ todoList });
            });
        }
      
handleAdd = (item) => {
          this.setState({ todoList: [...this.state.todoList, item] });
        }
      
    const todos = this.state.todoList[0] ? this.state.todoList.map(todo => <Todo key={todo._id} item={todo} />) : "No items...";
        return (
      <div className="App">
          <AddingForm onAdd={this.handleAdd} />
          <ul>{todos}</ul>
        </div>
        );
*/