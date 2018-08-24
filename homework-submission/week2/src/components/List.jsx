import React from "react";

class List extends React.Component {
    render(){
    return <ul className={this.Title}>{this.TodoItems}</ul>;
    }
}

export default List;