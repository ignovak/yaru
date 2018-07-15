import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { buildPostTree } from '../util';

class App extends Component {

  render() {

    const { dict } = buildPostTree(this.props.posts);
    const post = dict[this.props.match.params.id];
    if (!post) {
      // TODO: render 404
    }

    return (
      <PostCard data={post} />
    );
  }
}

export default connect(state => ({ posts: state.posts }))(App);
