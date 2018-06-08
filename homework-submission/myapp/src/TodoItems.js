import React, { Component } from "react";


class TodoItems extends Component {
    Items = [
        {

            "description": "Get out of bed",
            "deadline": " Wed, 2017-09-11",
            "done": true
        },
        {

            "description": "Brush teeth",
            "deadline": "Thu, 2017-09-10",
            "done": false
        },
        {
            "description": "Eat breakfast",
            "deadline": "Fri, 2017-09-09",
            "done": false
        }
    ];
    render() {


        const renderItems = this.Items.map((element, i) => {
            let isDone = 'Not Done'
            if (element.done) {
                isDone = 'Done'
            }
            return (
                <div className="comment" key={i}>
                    <h2>Description : {element.description}</h2>
                    <h2>Deadline : {element.deadline}</h2>
                    <h2> {isDone} </h2>

                </div>
            )


        })

        return (

            <div className="content">

                {renderItems}
            </div>

        );
    }
}

export default TodoItems;
