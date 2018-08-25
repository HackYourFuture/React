import React from 'react';

class Description extends React.Component {
    render() {
        console.log('this.props', this.props);

        return (
            <div>
                <ul>
                    <li>{this.props.descriptionAndDeadline} </li>
                </ul>
            </div>
        );
    }
}

export default Description;
