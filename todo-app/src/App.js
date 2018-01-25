import React from 'react';
import TodoApp from './TodoApp';
import {Provider} from 'mobx-react';
import * as stores from './stores';

window.stores = stores;

export default class App extends React.Component {

    render(){
        return(
            <div>
                <Provider {...stores}>
                    <TodoApp />
                </Provider>
            </div>
        );
    };
};
