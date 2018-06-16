import React, { Component } from 'react';

class Main extends Component {
    render() {
        const { todoDescription, deadline } = this.props;
        return (
            <div>
                <p>
                    Description : {todoDescription}
                </p>
                <em>
                    {deadline}
                </em>
            </div>
        );
    }
}

export default Main;