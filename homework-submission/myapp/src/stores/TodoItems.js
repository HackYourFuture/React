import React from "react";
import Edit from './../Edit';

class TodoItems extends React.Component {
    render() {
        const renderItems = this.props.listItems.map((element, i) => {
            let isDone = 'Not Done'
            let doneClass = '';
            if (element.done) {
                isDone = 'done'
                doneClass = 'done'
            }
            return (
                <div className={`comment ${doneClass}`} key={element._id}>
                    <Edit isDone={element.done} handleChangeCheckBox={this.props.handleChangeCheckBox}
                        id={element._id}
                        index={i}
                        save={this.props.save}
                        description={element.description}
                        deadline={element.deadline}
                        done={isDone}
                    />
                    <div>
                        <input type="checkbox"
                            checked={element.done}
                            onChange={() => {
                                console.log()
                                this.props.handleChangeCheckBox(element, element._id)
                            }}
                        />
                        <button type="button" onClick={() => {
                            this.props.onDelete(element)
                        }} >
                            Delete </button>
                    </div>


                </div>
            )
        }
        );

        return (
            <div>
                {renderItems}
            </div>
        );
    }
}


export default TodoItems;
