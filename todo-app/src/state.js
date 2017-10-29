import React from 'react'

export default class Status extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          done: this.props.status
        }
        this.changedStatus = this.changedStatus.bind(this);
      }
      changedStatus(){
          let changed = !this.state.done
          this.setState({
              done: changed
         })

        }
      getStatus() {
          let undone = "Undone"
          if (this.state.done) {
              undone = "done"
          } return undone
      }
    render(){
        return (
            <div>
                <input type="checkbox">
                {/* checked={this.state.checked} */}
                </input>
                <label >
                    {this.getStatus()}
                </label>
            </div>
        )
    }
}