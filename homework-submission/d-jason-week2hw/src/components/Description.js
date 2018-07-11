import React from "react";
import Deadline from "./Deadline";
import Button from "./Button";

export class Description extends React.Component {
    render() {
        const {
            index,
            description,
            deadline,
            isEditing,
            updateInputProp,
            cancelButtonHandlerProp
        } = this.props;
        return (
            <div style={{ display: "inline-block", textDecoration: "inherit" }}>
                <form
                    style={{
                        display: isEditing ? "inline-block" : "none",
                    }}
                    onSubmit={updateInputProp}
                >
                    <input
                        type="text"
                        name="edit_description_input"
                        defaultValue={description}
                        id={index}
                    />
                    <input
                        type="submit"
                        name="submit"
                        value="update"
                    />
                    <Button
                        text={"Cancel"}
                        class_name={"button"}
                        index={index}
                        clickHandler={cancelButtonHandlerProp}
                    />
                </form>
                <span>
                    {description} <Deadline deadline={deadline} />
                </span>
            </div>
        );
    }
}

export default Description;