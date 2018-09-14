import React, { Component } from 'react';
import InputField from './InputField';

export default class TodoItem extends Component {
  render() {
    const contentElement = this.props.contentEditable ? 
      (<li key={this.props.id}>
        <InputField
          type='text'
          label='update description:'
          value={this.props.newDescription}
          placeholder={this.props.description}
          handleChange={this.props.handleDescriptionChange}
        />
        <InputField
          type='date'
          label='update deadline:'
          value={this.props.newDate}
          placeholder={this.props.date}
          handleChange={this.props.handleDeadLineChange}
        />
      </li>)
      : (<li key={this.props.id}>
          <span>{this.props.description}</span>
          <span> deadline: </span>
          <span>{this.props.date}</span>
        </li>)
    ;
    
    return contentElement;
  }
}
