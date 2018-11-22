import React from "react";
import { inject, observer} from "mobx-react";


@inject("TodosStore")
@observer
  
class TodosCounter extends React.Component {
  render() {

    const { TodosStore } = this.props;

    return <div className="counter">
      
      <h3>Number of todos</h3>
      <p>You have</p>
        <h1>{TodosStore.numberOfTodos}</h1>
      <p>todos</p>
      
      </div>;
  }
}

export default TodosCounter;