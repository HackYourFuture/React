import React, { Component } from 'react';
import Block from '../components/Block';

class Teaching extends Component {
  render() {
    return (
      <main className="page">
        <h1 className="page__title">What do we teach?</h1>
        <div className="page__body">
          <p>Our six months course is divided into eight modules which cover programming languages such as HTML, CSS, JavaScript, Node, Databasing in MySQL/MongoDB and React. However, what we value most is that our students learn how to think as a programmer, how to solve problems, and how to manage a project. This fundamental knowledge prepares our students for their first job as a web developer.</p>
        </div>
        <div className="page__blocks">
          <Block title="HTML" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
          <Block title="CSS" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
          <Block title="Command line interface" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
          <Block title="JavaScript" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
          <Block title="NodeJS" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
          <Block title="React" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, neque at euismod efficitur, odio elit blandit" />
        </div>
      </main>
    );
  }
}

export default Teaching;
