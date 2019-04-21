import React, { Component } from 'react';

// COMPONENTS
import Button from './navbar_button/Button';

export class Navbar extends Component {
  render() {
    return (
      <nav style={nav_style}>
        {/* Male & Female Button */}
        <li style={{ flex: '2' }}>
          <Button
            imgUrl={'https://image.flaticon.com/icons/svg/18/18359.svg'}
            imgAlt={'Male & Female icon'}
          />
        </li>

        {/* Male Icon Button */}
        <li style={{ flex: '2' }}>
          <Button
            imgUrl={'https://cdn4.iconfinder.com/data/icons/avatars-32/90/24-512.png'}
            imgAlt={'Male icon'}
          />
          <h4 style={{ margin: '20px auto auto -20px' }}>Gender</h4>
        </li>

        {/* Female Icon Button */}
        <li style={{ flex: '3' }}>
          <Button
            imgUrl={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/141px-Female_icon.svg.png'
            }
            imgAlt={'Female icon'}
          />
        </li>

        {/* Region Button */}
        <li style={{ flex: '3' }}>
          <Button
            imgUrl={'https://img.icons8.com/ios/50/000000/flag-filled.png'}
            imgAlt={'flag icon'}
          />
          <h4 style={{ margin: '20px auto auto -10px' }}>Region</h4>
        </li>

        {/* Bulk Button */}
        <li style={{ flex: '40' }}>
          <Button
            imgUrl={
              'https://cdn2.iconfinder.com/data/icons/social-media-network-fill-flat-icon/512/Blackberry-2-512.png'
            }
            imgAlt={'Bulk icon'}
          />
          <h4>Bulk</h4>
        </li>

        {/* More Button */}
        <li style={{ flex: '1' }}>
          <Button
            imgUrl={
              'https://cdn4.iconfinder.com/data/icons/eldorado-layout/40/preview_list-512.png'
            }
            imgAlt={'List icon'}
          />
          <h4>More</h4>
        </li>
      </nav>
    );
  }
}

// STYLES
// nav
const nav_style = {
  display: 'flex',
  listStyle: 'none',
  justifyContent: 'space-around',
  margin: '3%',
};

// navbar buttons style is declared in the file (client/src/index.css). HOWEVER, the flex of each one is styled inline.

export default Navbar;
