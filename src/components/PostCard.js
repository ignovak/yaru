import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormControl, Collapse } from 'react-bootstrap';
import * as postActions from '../actions/postActions';

class PostCard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const input = e.target.querySelector('textarea');
    const post = {
      parentId: this.props.data.id,
      avatar: 'https://pbs.twimg.com/profile_images/728303368871903232/kyFqCkcD_400x400.jpg',
      author: 'anonymous',
      content: input.value,
      date: (new Date()).toISOString().replace('T', ' ').replace(/:[^:]+$/, ''),
      id: 'post_' + +new Date()
    }
    this.props.dispatch(postActions.addPost(post));
    e.target.reset();
    this.setState({ open: false });
  }

  render() {

    return (

      <div className="card" id={this.props.data.id}>
        <div className="card-body">
          <li className="media">
            <img className="mr-3" src={this.props.data.avatar} alt={this.props.data.author} width="30" />
            <div className="media-body">
              <h5 className="mt-0">{this.props.data.author}</h5>
              <small className="text-muted">{this.props.data.date}</small>
              <p>{this.props.data.content}</p>

              <Button bsSize="small" bsStyle="link" className="text-muted" onClick={() => this.setState({ open: !this.state.open })}>
                Add comment
              </Button>
              <Collapse in={this.state.open}>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <FormControl componentClass="textarea" placeholder="Your comment" ref={this.textarea} />
                  <Button bsSize="small" bsStyle="primary" type="submit">Submit</Button>
                </form>
              </Collapse>

            </div>
          </li>
        </div>
      </div>

    )
  }

}

export default connect()(PostCard);
