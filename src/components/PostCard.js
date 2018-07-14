import React, { Component } from 'react';

class PostCard extends Component {

  render() {
    return (
      <div>
        <strong>{this.props.data.author}</strong>
        <p>
          {this.props.data.content}
        </p>
      </div>
    )
  }

}

export default PostCard;
