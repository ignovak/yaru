import React, { Component } from 'react';

class PostCard extends Component {

  render() {

    return (

      <div className="card">
        <div className="card-body">
          <li className="media">
            <img className="mr-3" src={this.props.data.avatar} alt={this.props.data.author} />
            <div className="media-body">
              <h5 className="mt-0">{this.props.data.author}</h5>
              <small className="text-muted">{this.props.data.date}</small>
              <p>{this.props.data.content}</p>
            </div>
          </li>
        </div>
      </div>

    )
  }

}

export default PostCard;
