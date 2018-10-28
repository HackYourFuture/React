import React, { Component } from "react";
import List from "./List";
import Checkbox from "./Checkbox";

class Todos extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item, id) => (
                        <div className={item.done ? 'checked' : ''} key={id}>
                            <Checkbox
                                id={item.id}
                                checkbox={item.done}
                                handler={this.props.handler}
                            />

                            <List
                                key={id}
                                description={item.description}
                                deadline={item.deadline}
                            />
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Todos;
