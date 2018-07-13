import React from "react";
import Checkbox from './../Checkbox';

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
                <div className={`comment ${doneClass}`} key={element.id}>
                    <Checkbox isDone={element.done} handleChangeCheckBox={this.props.handleChangeCheckBox}
                        id={element.id}
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
                                this.props.handleChangeCheckBox(element.id)
                            }}
                        />
                        <button type="button" onClick={() => {
                            this.props.onDelete(element.id)
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
