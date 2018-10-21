import React, { Component } from 'react';

class Element extends Component {
    state = {
        id: this.props.id,
        description: this.props.description,
        deadline: this.props.deadline,
        done: this.props.done
     }

     throwLineHandle = () => {
        (!this.state.done) ? this.setState({done: true}) : this.setState({done: false});
     }

    render() { 
        const {id} = this.state;
        
        return ( 
            <li className="list-group-item m-1 text-md-left font-weight-bold" id={'item' + id}>
                {this.myCheckBox()}
                {this.checkItemsDone()}
                    <span className="item-close-icon float-right font-weight-bold" onClick={() => this.props.deleteItem(id)}>&times;</span>
            </li>
         );
    }

    checkItemsDone() {
        const {description, deadline} = this.state;
        const item = description + ', ' + deadline;
        return this.state.done 
            ? <p onClick={this.throwLineHandle}><del>{item}</del></p> 
            : <p onClick={this.throwLineHandle}>{item}</p>
    }
    myCheckBox() {
        return <label className="checkbox-container">
                    <input type="checkbox" checked={!this.state.done ? false : true} onChange={this.throwLineHandle} />
                    <span className="checkmark"></span>
                </label>;
    }
}
 
export default Element;