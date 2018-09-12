import React from 'react';

export default class Button extends React.Component {
    render() {
        const { handleClick, type, action, id, className} = this.props;
        return (
            <div key={action + id} className={className}>
                <button 
                    key={action + id}  
                    onClick={(e) => { handleClick(e.target.id)}} 
                    type={type} 
                    id={id} 
                >
                    {action}
                </button>
            </div>
        );
    }
}