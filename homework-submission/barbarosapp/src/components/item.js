import React from "react";

class Item extends React.Component {

  render() {
    const { name, deadLine, check } = this.props;
    
    return (
      <div className="ToDos">

        <p> Name : <span className="Color1"> {name} </span></p>
        <p> Deadline : <span className="Color2"> {deadLine} </span></p>
        <p> Situation : <span className="Color3"> {check} </span></p>

      </div>
    );
  }
};

export default Item;