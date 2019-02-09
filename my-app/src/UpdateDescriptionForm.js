import React from 'react';
import Service from './service';

class UpdateDescriptionForm extends React.Component {
  state = {
    description: this.props.description,
  };
  handleSubmit = e => {
    e.preventDefault();
    Service.editingDescription({
      description: e.target.description.value,
      id: this.props.id,
    }).then(post => this.setState({ description: post.description }));
    this.props.editDescription();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="description" defaultValue={this.props.description} />
        <input type="submit" value="submit" />
      </form>
    );
  }
}
export default UpdateDescriptionForm;
