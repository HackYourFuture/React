import React from 'react';
import Button from './Button';


export default class Edit extends React.Component {

  EditToDo = (indexToDo) => {
    console.log('Hello');

  }


  render() {
    return (
      <Button text='Edit' index={this.props.index} onClickFunction={this.EditToDo} />

    );
  }
}