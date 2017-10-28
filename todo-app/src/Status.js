import React from 'react';

export default class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isDone: false};
        this.click = this.click.bind(this);
      }
    
      click(event) {
        this.setState({
          isDone: event.target.checked
        });
      }
    
      render() {
        return (
          <label>
          <input type="checkbox"
            checked={this.state.isDone}
            onClick={this.click}
          />
         </label>
        );
      }
}
