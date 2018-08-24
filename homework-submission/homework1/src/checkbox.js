import React,{Component} from 'react';

class CheckBoxes extends Component {
  render(){
    //const checked=this.props.done
    return   <input type="checkbox"
                       onClick={this.props.onChange}
                 />
  }
}
export default CheckBoxes;
