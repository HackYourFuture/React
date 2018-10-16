import React from 'react';
import Picture from './hyf.png'

class Footer extends React.Component {
  render() {
    return <footer>
      <div id='footer'>
        <img src={Picture} alt='HackYourFuture' />
      </div>
    </footer>
  }
}
export default Footer