import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from './components/PostCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    const tree = [];
    const dict = {};
    this.props.posts.forEach(_ => {
      dict[_.id] = _;
      if (!_.parentId) {
        tree.push(_);
      } else {
        const parent = dict[_.parentId];
        if (parent && !parent.children.find(child => child.id === _.id)) {
          parent.children.push(_);
        }
      }
    });
    // TODO: will need another loop for orphan posts

    return (
      <div className="container">
        <ul className="list-unstyled">
          {tree.map((_, i) => <PostCard key={i} data={_} />)}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({ posts: state.posts }))(App);
