import React from 'react';
import Service from './service';

class Like extends React.Component {
  state = {
    like: this.props.like,
    edit: false,
  };
  handleClickLike = () => {
    if (this.props.like) {
      if (!this.props.like.includes(this.props.liker)) {
        this.setState({ edit: false });
        Service.liker({
          like: [...this.state.like, this.props.liker],
          id: this.props.id,
        }).then(post => this.setState({ like: post.like }));
      }
    }
  };
  handleClickDislike = () => {
    this.setState({ edit: true });
    let i = this.props.like.indexOf(this.props.liker);
    this.props.like.splice(i, 1);
    Service.liker({
      like: this.props.like,
      id: this.props.id,
    }).then(post => this.setState({ like: post.like }));
  };

  render() {
    return this.state.edit && !this.state.like.includes(this.props.liker) ? (
      <div>
        <input type="button" value="like" onClick={() => this.handleClickLike()} />
        <input type="button" value={this.state.like ? this.props.like.length : 0} />
      </div>
    ) : (
      <div>
        <input type="button" value="dislike" onClick={() => this.handleClickDislike()} />
        <input type="button" value={this.state.like ? this.state.like.length : 0} />
      </div>
    );
  }
}
export default Like;
