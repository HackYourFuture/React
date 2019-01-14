import React, { Component } from 'react';
import DeadlineDate from './DeadlineDate';
import Description from './Description';
import Checkbox from './Checkbox';


class Post extends Component {
  render() {
    const styles = {
      textDecoration: this.props.item.done ? "line-through" : "",
    }
    return (
      <div className='todo-item'>
        <Checkbox changeHandel={this.props.changeHandel} item={this.props.item} />
        <Description styles={styles} description={this.props.item.description} />
        <DeadlineDate styles={styles} deadline={this.props.item.deadline} />
      </div>
    );
  }
}

export default Post