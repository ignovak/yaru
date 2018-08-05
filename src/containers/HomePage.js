import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../components/PostCard';
import { buildPostTree, recalculateDepth } from '../util';

class HomePage extends Component {

  render() {
    const { tree } = buildPostTree(this.props.posts);

    tree.forEach(_ => recalculateDepth(_));

    return (
      <ul className="list-unstyled">
        {tree.map((_, i) => <PostCard key={i} data={_} />)}
      </ul>
    );
  }
}

export default connect(state => ({ posts: state.posts }))(HomePage);
