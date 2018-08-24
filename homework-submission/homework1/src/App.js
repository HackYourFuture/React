import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Todo from './todo';
// import Todotimes from './todoTime';
import ListTitle from './listTitle';
import List from './list';
import StateLists from './listJson.json';
import CheckBoxes from './checkbox'
class App extends Component {
  state={
    StateLists,
    textDecorationLine1:'',
    textDecorationLine2:'',
    textDecorationLine3:'',
    noActionAnyMore:''
  }
  onChange=(key,done)=>{
        StateLists:[{
          id:this.state.StateLists[0].id,
          description:this.state.StateLists[0].description,
          deadline:this.state.StateLists[0].deadline
        },
        {
          id:this.state.StateLists[1].id,
          description:this.state.StateLists[1].description,
          deadline:this.state.StateLists[1].deadline
        },
        {
          id:this.state.StateLists[2].id,
          description:this.state.StateLists[2].description,
          deadline:this.state.StateLists[2].deadline
        }
      ]
    if(key==1){
        this.setState({
          textDecorationLine1:'line-through',
        })
    }else if(key==2){
      this.setState({
        textDecorationLine2:'line-through',
      })
    }else if(key==3){
      this.setState({
        textDecorationLine3:'line-through'
      })
    }
    if(StateLists[0].done==true && StateLists[1].done==true && StateLists[2].done==true){
      this.setState({
        noActionAnyMore:'No items'
      })
    }
  }
  render() {
    return (
      <div className="App">
          <ListTitle title="todo list"></ListTitle>
          <input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[0].id,StateLists[0].done=true)} key={this.state.StateLists.id}/><p style={{textDecorationLine:this.state.textDecorationLine1}}>{this.state.StateLists[0].description} {this.state.StateLists[0].deadline}</p>
          <input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[1].id,StateLists[1].done=true)} key={this.state.StateLists[1].id}/><p style={{textDecorationLine:this.state.textDecorationLine2}}>{this.state.StateLists[1].description} {this.state.StateLists[1].deadline}</p>
          <input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[2].id,StateLists[2].done=true)} key={this.state.StateLists[2].id}/><p style={{textDecorationLine:this.state.textDecorationLine3}}>{this.state.StateLists[2].description} {this.state.StateLists[2].deadline}</p>
           {this.state.noActionAnyMore}
      </div>
    );
  }
}
export default App;
