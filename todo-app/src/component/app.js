import React from 'react';
import Header from "./header";
import Todos from "./todos";


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Todos />
            </div>
        );
    }
}
