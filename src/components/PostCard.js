import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      children: [],
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

      <li className="card" id={'post_' + this.props.data.id}>
        <div className="card-body">
          <div className="media">
            <img className="mr-3" src={this.props.data.avatar} alt={this.props.data.author} width="30" />
            <div className="media-body">
              <span className="h5">{this.props.data.author}</span>
              {' '}
              at
              {' '}
              <Link to={`/posts/${this.props.data.id}`} className="small text-muted">{this.props.data.date}</Link>
              <p>{this.props.data.content}</p>

              <Button bsSize="small" bsStyle="link">+1</Button>
              <Button bsSize="small" bsStyle="link">-1</Button>
              <Button bsSize="small" bsStyle="link" className="text-muted" onClick={() => this.setState({ open: !this.state.open })}>
                Add comment
              </Button>
              <Collapse in={this.state.open}>
                <form onSubmit={this.onSubmit.bind(this)}>
                  <FormControl componentClass="textarea" placeholder="Your comment" ref={this.textarea} />
                  <Button bsSize="small" bsStyle="primary" type="submit">Submit</Button>
                </form>
              </Collapse>

              <ul className="list-unstyled">
                {this.props.data.children.map((_, i) => <PostCard {...this.props} key={i} data={_} />)}
              </ul>

            </div>
          </div>
        </div>
      </li>

    )
  }

}

export default connect()(PostCard);
