import React, { Component } from 'react';

export class Help extends Component {
  state = {
    texts: [
      {
        id: 1,
        text: 'Share = ❤️',
      },
      {
        id: 2,
        text: 'Press C, then CTRL+C to easily copy names! 😎',
      },
      {
        id: 3,
        text: 'All results, including photos, are free for all purposes. 🤘',
      },
      {
        id: 4,
        text: 'Send feedback or ideas to @thomweerd. ✍️',
      },
      {
        id: 5,
        text: 'Contribute through Github! 👋',
      },
      {
        id: 6,
        text: 'Donate if this site is useful! 💸',
      },
    ],
  };
  render() {
    const { texts } = this.state;
    const random_text = Math.floor(Math.random() * texts.length);
    return (
      <div style={{ textAlign: 'center' }}>
        <div>{this.state.texts.map(text => <p>{text.text}</p>)[random_text]}</div>
      </div>
    );
  }
}
export default Help;
