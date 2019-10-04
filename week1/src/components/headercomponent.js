import React from 'react'

const ComponentHeader=(props)=>{
        return (
        <div>
          <h2 className="Componentheader">{props.title} </h2>
        </div>
        )
        }
export default ComponentHeader;

// The goal of this component is to make header for todo lists