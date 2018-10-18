import React from "react";

class Item extends React.Component {
    render() {
        const { text, deadLine } = this.props;
        return (
            <li key={deadLine}>{text}, {deadLine}</li>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h3>TODO list</h3>
                <ul>
                    <Item text="Get out of bed" deadLine="Wed Sep 13 2017" />
                    <Item text="Brush teeth" deadLine="Thu Sep 14 2017" />
                    <Item text="Eat breakfast" deadLine="Fri Sep 15 2017" />
                </ul>
            </div>
        );
    }
}


export default TodoList;
