import React from 'react';

class Header extends React.Component{
    render() {
        return (
                <header className="App-header">
                    <p>
                        Todo<span className='designLogo'>App</span>
                    </p>
                </header>
        )
    }
}

export default Header;