import React, {Component} from 'react';
import './App.css';
import Photo from './components/Photo';
import Header from './components/Header';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import Footer from './components/Footer';


class App extends Component {
  render() {

    return (
        <div className="App">

          <Header> </Header>

          <Photo/>

        <Item1/>
        <Item2/>
        <Item3/> 

          <Footer number="+12314"/>

        </div>
    );
  }
}

export default App;
