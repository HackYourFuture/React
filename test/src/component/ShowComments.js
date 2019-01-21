import React from 'react';

class ShowComments extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.length > 0 &&
          this.props.data.map((comment, index) => (
            <div key={index}>
              name: {comment.name}
              <br />
              comment:{comment.comment}
            </div>
          ))}
      </div>
    );
  }
}

export default ShowComments;
