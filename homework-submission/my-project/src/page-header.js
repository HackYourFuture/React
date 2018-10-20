import React from 'react';
import Picture from './todolist_logo.gif'

class header extends React.Component {
    render() {
        return <header>
            <div>
                <img class="logo" src={Picture} alt='todo-logo' />
            </div>
        </header >
    }
}
export default header


