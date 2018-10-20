import React from 'react';
import Picture from './all-done.jpg'

class footer extends React.Component {
    render() {
        return <footer>
            <div>
                <img class="done" src={Picture} alt='allDone-logo' />
            </div>
        </footer >
    }
}
export default footer

