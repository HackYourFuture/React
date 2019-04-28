import React, { Component } from 'react';

const Home = () => {
  return <div> home</div>;
};
function About() {
  return <div> this is a bout</div>;
}

function TopicList() {
  return <div> this is a Topic</div>;
}

export class Links extends Component {
  state = {
    cur_page: '',
  };
  handleClick = id => {
    console.log(id);
    this.setState({ cur_page: id });
  };

  render() {
    let comp = null;
    if (this.state.cur_page === 'home') {
      comp = <Home />;
    } else if (this.state.cur_page === 'about') {
      comp = <About />;
    } else if (this.state.cur_page === 'topics') {
      comp = <TopicList />;
    }

    return (
      <div>
        <a href="#" onClick={() => this.handleClick('home')}>
          {' '}
          Home
        </a>
        <br />
        <a href="#" onClick={() => this.handleClick('about')}>
          About
        </a>
        <br />
        <a href="#" onClick={() => this.handleClick('topics')}>
          Topics
        </a>
        {comp}
      </div>
    );
  }
}

export default Links;
