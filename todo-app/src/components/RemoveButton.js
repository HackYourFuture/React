import React from 'react'

export const RemoveButton = (props) => (
             <li  style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana',fontSize:
              '1.5em',marginBottom:'10px'}}>{props.taskToBuild.description}
              <button onClick={props.removeFunction(props.index)}>
                </button>
                
              </li>
             
            )
    