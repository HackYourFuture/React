import React from "react";

class Todoitems extends React.Component {
    render(){
        return(
            <div id={this.props.id}>
            <ul>
            {this.props.todo}
            </ul>
            </div>
        );
    }
}

export default Todoitems;