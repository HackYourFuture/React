import React from 'react'
import './App.css'
import todo from './Comments.js'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Todo List:</h1>
        <Todo />
      </div>
    )
  }
}