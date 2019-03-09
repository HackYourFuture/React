import React from "react";

class FetchJson extends React.Component {

  constructor() {
    super();
    this.state = {
      names: []
    }
  }


  componentDidMount() {


    fetch("https://uinames.com/api/?amount=10")
      .then(res => res.json())
      .then(names => this.setState({ names }, () => console.log(names)))

  }

  render() {
    return (<div>
      {this.state.names.map((names, i) => (<ul key={i}><li>{names.name}</li></ul>))}
    </div>
    )
  }
}




export default FetchJson;
