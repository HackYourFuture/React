import React, { Component } from 'react';

// Import components
import Deadline from './Deadline';
import Description from './Description';
import Done from './Done';
import Data from '../todo-list-data.json';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: Data,
        }
    }
    checkStatus = (id) => {
        const newList = this.state.list.map((element) => {
          if (id === element.id) {
            return {
              ...element,
              done: !element.done
            }
          }
          return element;
        });
        this.setState({ list: newList });
      }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((element) =>
                            <li key={element.id}>
                                <input type="checkbox" defaultChecked={element.done} onClick={() => this.checkStatus(element.id)} />
                                <Description description={element.description} />
                                <Deadline deadline={element.deadline} />
                                <Done done={element.done} />
                            </li>)
                    }
                </ul>
            </div>

        );
    }

}

export default List;