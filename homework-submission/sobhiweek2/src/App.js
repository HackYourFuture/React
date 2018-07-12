import React from 'react';
import './App.css';
import todos from "./source/todos.json";
import Header from "./source/Header";
import Description from "./source/Description";
import DeadLine from "./source/DeadLine";
    

export default class App extends React.Component {

  state = { todos };

  handelCheck = () => { this.setState({ todos: this.state.todos })};

  render() {

    const todosState = this.state.todos;

    const todosRender = todosState.map((elem) =>

      <div key={elem.id}>
       <span style={elem.done ? { textDecoration: 'line-through' } : { }}> 
        <Description description={elem.description} />
        <DeadLine deadline={elem.deadline} />
        <input type="checkbox" className="checkbox"
         onClick={this.handelCheck.bind(null, elem)}
          defaultChecked={elem.done} /><br />
       </span>
      </div>
    );

    return (

      <div className="App" >

        <Header /> 
        <img className ="image" 
              src="https://cdn-images-1.medium.com/max/2000/1*o-9xgkkyBgkhnBVN_Wxs6Q.png"/>
         
        <div className='todo-list'>

          {todosRender} 
          {(todosState.length === 0)? <h1>NO ITEMS</h1> : null}  
                   
        </div>
      </div>
    );
  }

}

