import React from "react";
import Checkbox from './../Checkbox';

class TodoItems extends React.Component {
    render() {
        const todoListItems = this.props.listItems.map((element, i) => {
            let isDone = 'Not Done'
            let doneClass = '';
            if (element.done) {
                isDone = 'done'
                doneClass = 'done'
            }

            return (
                <div className={`comment ${doneClass}`} key={i}>
                    <Checkbox isDone={element.done} handleChangeCheckBox={this.props.handleChangeCheckBox}
                        index={i} onDelete={this.onDelete}
                        description={element.description}
                        deadline={element.deadline}
                        done={isDone}
                    />
                    <div>
                        <input type="checkbox"
                            checked={this.isDone}
                            onClick={() => {
                                this.props.handleChangeCheckBox(this.props.index, this.props.done)
                            }}
                        />
                        <button type="button" onClick={() => {
                            this.props.onDelete(this.props.index)
                        }} >
                            Delete </button>
                    </div>


                </div>
            )
        }
        );

        return (
            <div id={this.props.id} >
                {todoListItems}
            </div>
        );
    }
}


export default TodoItems;
