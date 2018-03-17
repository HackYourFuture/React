import React, { Component } from 'react';
import DeleteButton from './DeleteButton'
import EditTask from './EditTask'
import '../App.css';
export default class DisplayDetails extends Component {
    
    handelDisplay = (id,index, selected, description, deadline, handelUpdateTask, handelDeleteTask) => {
        if (selected === true) {
            return (
                <div className='TodoFunctionality-list-items'>
                    <div><h2>#{id}</h2></div>
                    <div><h2>{description}  [Deadline at:{deadline}]</h2></div>

                    <div>
                        <EditTask
                        id={id}
                        handelUpdateTask={handelUpdateTask}
                        />
                        <DeleteButton
                        id={id}
                        selected={selected}
                        handelDeleteTask={handelDeleteTask}
                        />
                    </div>
                </div>
            )
        
        }
    }
    render() {
        const {
            id,
            description,
            deadline,
            selected,
            index,
            handelDeleteTask,
            handelUpdateTask,
        } = this.props


        return (
            <div>
                {this.handelDisplay(id, index, selected, description, deadline, handelUpdateTask, handelDeleteTask)}
                
            </div>  
        )
    }
}