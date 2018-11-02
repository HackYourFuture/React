import React from 'react';

class Header extends React.Component{
    render() {
        return (
                <header className="App-header">
                    <p>
                        Todo<span className='designLogo'>List</span>
                    </p>
                </header>
        )
    }
}

export default Header;