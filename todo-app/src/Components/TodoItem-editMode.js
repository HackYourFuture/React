import React, { Component, Fragment } from "react";

import Button from "./Button";

export default class EditMode extends Component {
  render() {
    if (!this.props.isEditingId) {
      return (
        <Button buttonContent="Edit" onClick={this.props.handleToggleEdit} />
      );
    }
    return (
      <Fragment>
        <Button
          buttonContent="Update"
          onClick={this.props.handleUpdate}
          className="updateButton"
          isDisabled={
            this.props.toBeUpdatedItem.trim() === "" ||
            this.props.toBeUpdatedDeadline === ""
          }
        />
        <Button
          buttonContent="Cancel"
          onClick={this.props.handleCancelEdit}
          className="cancelButton"
        />
      </Fragment>
    );
  }
}
