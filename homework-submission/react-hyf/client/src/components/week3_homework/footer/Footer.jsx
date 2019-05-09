import React, { Component } from 'react';

// COMPONENTS
import Button from '../navbar/navbar_button/Button';

export class Footer extends Component {
  render() {
    return (
      <div style={footer_div_style}>
        {/* twitter */}
        <Button
          imgUrl={'https://a.slack-edge.com/ae7f/img/services/twitter_512.png'}
          imgAlt={'Twitter icon'}
        />
        <button className={btn_style}>2.1K</button>

        {/* facebook */}
        <Button
          imgUrl={
            'https://www.performancecarstereo.com/wp-content/uploads/2018/11/facebook-img-300x300.png'
          }
          imgAlt={'facebook icon'}
        />
        <button className={btn_style}>1.7K</button>

        {/* github */}
        <Button
          imgUrl={'https://iop.global/wp-content/uploads/2018/07/github.png'}
          imgAlt={'github icon'}
        />
        <button className={btn_style}>0.5K</button>
      </div>
    );
  }
}

// STYLES
// container div
const footer_div_style = {
  display: 'flex',
  justifyContent: 'center',
  background: '#fff',
  padding: '0.2%',
  width: '17%',
  margin: 'auto',
};

// registered buttons
const btn_style = {
  margin: 'auto 1%',
  height: '32px',
};

export default Footer;
