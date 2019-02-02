import React, { Component } from 'react';
import Block from './Block';

import PAGES from '../data/pages';

class Page extends Component {
  render() {
    const pageName = this.props.match.params.page;
    const { title, body, blocks, items } = PAGES[pageName];
    const paragraphs = body.split('\n').map((p, index) => <p key={index}>{p}</p>);
    const blockElements = blocks.map((block, index) => <Block key={index} title={block.title} body={block.body} />);
    let itemElements;
    if (items) {
      itemElements = <ul>{ items.map((item, index) => <li key={index}>{ item }</li>) }</ul>;
    }
    return (
        <main>
          <h1 className="page__title">{ title }</h1>
          <div className="page__body">{ paragraphs } { itemElements }</div>
          <div className="page__blocks">{ blockElements }</div>
        </main>
    );
  }
}

export default Page;
