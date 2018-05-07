import React, { Component } from "react";
import Todo from "./Todo";
import { Provider } from 'mobx-react'
import Store from "./Store";
export default class App extends Component {

    render() {
        return (
            <Provider {...Store}>
                <Todo />
            </Provider>
        )

    }
}

