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
    action:'',
    textDecorationLine1:'',
    textDecorationLine2:'',
    textDecorationLine3:'',
    noActionAnyMore:''
  }
  onChange=(key)=>{
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
        textDecorationLine3:'line-through',
        action:'done',
        noActionAnyMore:'No items'
      })
    }else{
      alert("start as a new user")
    }
  }
  render() {
    return (
      <div className="App">
          <ListTitle title="todo list"></ListTitle>
          <p style={{textDecorationLine:this.state.textDecorationLine1}}><input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[0].id)} key={this.state.StateLists[0].id}/><List description={this.state.StateLists[0].description} deadline={this.state.StateLists[0].deadline}/></p>
          <p style={{textDecorationLine:this.state.textDecorationLine2}}><input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[1].id)} key={this.state.StateLists[1].id}/><List description={this.state.StateLists[1].description} deadline={this.state.StateLists[1].deadline}/></p>
          <p style={{textDecorationLine:this.state.textDecorationLine3}}><input type="checkbox" onClick={()=>this.onChange(this.state.StateLists[2].id)} key={this.state.StateLists[2].id}/><List description={this.state.StateLists[2].description} deadline={this.state.StateLists[2].deadline}/></p>
           {this.state.noActionAnyMore}
      </div>
    );
  }
}

export default App;
