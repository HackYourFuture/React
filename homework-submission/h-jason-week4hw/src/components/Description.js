import React from "react";
import Deadline from "./Deadline";
import Button from "./Button";
import { observer } from "mobx-react";

//@inject("todoListStore")
@observer
export class Description extends React.Component {
    render() {
        const {
            index,
            description,
            deadline,
            updateInputHandler,
            cancelButtonHandler,
            isEditing
        } = this.props;

        return (
            <div style={{ display: "inline-block", textDecoration: "inherit" }}>
                <form
                    style={{
                        display: isEditing ? "inline-block" : "none",
                        fontSize: "12px"
                    }}
                    onSubmit={updateInputHandler}
                >
                    <input
                        type="text"
                        name="edit_description_input"
                        defaultValue={description}
                        id={index}
                    />
                    <input
                        style={{ fontSize: "12px" }}
                        type="submit"
                        name="submit"
                        value="update"
                    />
                    <Button
                        text={"Cancel"}
                        class_name={"button"}
                        index={index}
                        clickHandler={cancelButtonHandler}
                    />
                </form>
                <span
                    style={{
                        display: !isEditing ? "inline-block" : "none",
                        textDecoration: "inherit"
                    }}
                >
                    {description} <Deadline deadline={deadline} />
                </span>
            </div>
        );
    }
}

export default Description;