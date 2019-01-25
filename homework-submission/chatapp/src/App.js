import React, { Component } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessageList />
        <SendMessageForm />
        <RoomList />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
