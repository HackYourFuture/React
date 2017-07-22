import React from 'react';
import PropTypes from 'prop-types'


export const SingleTask = (props) => (
             <li  style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana',fontSize:
              '1.5em',marginBottom:'10px'}}>{props.taskToBuild.description}
              <button onClick={props.removeFunction(props.index)}>
                </button>
                
              </li>
             
            )
    
