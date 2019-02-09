import React from 'react';
import Service from './service';

class DeletePost extends React.Component {
  state = {
    data: this.props.data,
  };
  handleDeletePost = () => {
    let i = this.props.index;
    Service.delete({
      data: [...this.state.data.splice(i, 1)],
      id: this.props.id,
    }).then(() => this.setState({ data: this.state.data }));
    this.props.deletePost(this.state.data);
  };

  render() {
    return (
      <div className="editForm">
        <form>
          <input type="button" value="delete post" onClick={() => this.handleDeletePost()} />
        </form>
      </div>
    );
  }
}
export default DeletePost;
