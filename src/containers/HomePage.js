import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { buildPostTree } from '../util';

class HomePage extends Component {

  render() {
    const { tree } = buildPostTree(this.props.posts);

    return (
      <ul className="list-unstyled">
        {tree.map((_, i) => <PostCard key={i} data={_} />)}
      </ul>
    );
  }
}

export default connect(state => ({ posts: state.posts }))(HomePage);
