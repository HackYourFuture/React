import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainForm from './components/MainInfo';
import AddForm from './components/AddForm';
import GetInfo from './services/GetMainInfo';

class App extends Component {
  state = {
    mainInfo: [],
  };

  componentDidMount() {
    GetInfo.getMainInfo().then(mainInfo =>
      this.setState({
        mainInfo,
      }),
    );
  }

  handleItemRemove = id => {
    const newMainInfo = this.state.mainInfo.filter(item => item._id !== id);
    this.setState({ mainInfo: newMainInfo });
  };

  handleItemAdd = item => {
    this.setState({ mainInfo: [...this.state.mainInfo, item] });
  };

  handelItemUpdate = (id, newInfo) => {
    const mainInfo = this.state.mainInfo.map(info => (info._id === id ? newInfo : info));
    this.setState({ mainInfo });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddForm onItemAdd={this.handleItemAdd} />
        <MainForm
          onItemRemoved={this.handleItemRemove}
          onItemEdited={this.handelItemUpdate}
          onItemLiked={this.handelItemUpdate}
          onItemDisLiked={this.handelItemUpdate}
          mainInfo={this.state.mainInfo}
        />
      </div>
    );
  }
}

export default App;
