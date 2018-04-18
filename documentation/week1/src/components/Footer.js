/**
 * Created by nasir on 25/02/2018.
 */
import React, {Component} from 'react';


export default  class Footer extends Component {


  render() {
    const number = this.props.number;
    return (
        <div>
          Contact me at: {number}
        </div>
    );
  }
}
