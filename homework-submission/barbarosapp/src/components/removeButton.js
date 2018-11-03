import React from "react";

class RemoveButton extends React.Component {
 

  handleRemove = id => {
    const newData = this.state.Data
    newData.splice(id, 1);
    this.setState({ Data: newData });
  };


  render() {
    // const { handleRemove, id} = this.props;
    
    return (
      
      <button
        onClick={e => this.handleRemove(this.props.id, e)}
        className="removeButton"
      
      />
    );
  }
}

export default RemoveButton;
