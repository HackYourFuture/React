import React, { Component } from 'react'
import './App.css';
import MainInfo from './components/mainInfo'
import MainForm from './components/mainForm'
import GetInfo from './services/getMainInfo'
import Header from './components/header'


class App extends Component {

   state = {
      mainInfo: []
   }

   componentDidMount() {
      GetInfo.getMainInfo()
         .then(mainInfo => this.setState({
            mainInfo
         }))
   }

   handleItemRemove = (id) => {

      const newMainInfo = this.state.mainInfo.filter(item => item._id !== id);
      this.setState({ mainInfo: newMainInfo })

   }

   handleItemAdd = (item) => {
      console.log(item)
      this.setState({ mainInfo: [...this.state.mainInfo, item] })
   }

   handelItemLike = (id, info) => {
      // const newMainInfo = this.state.mainInfo.map(info => id = info._id ? info.isLiked = !info.isLiked : console.log("Nope"));
      // const newMainInfo = [...this.state.mainInfo]
      //const newMainInfo = this.state.mainInfo
      const newMainInfo = id = info._id ? info.isLiked = !info.isLiked : console.log("Nope")
      console.log("id", id)
      console.log("info", info)
      //newMainInfo[id].isLiked = !newMainInfo[id].isLiked
      console.log('after', newMainInfo)
      this.setState({ mainInfo: info })
   }


   render() {
      return (
         <div className="App">
            <Header />
            <MainForm onItemAdd={this.handleItemAdd} />
            <MainInfo onItemRemoved={this.handleItemRemove} onItemLiked={this.handelItemLike} mainInfo={this.state.mainInfo} />
         </div>
      );
   }
}

export default App;
