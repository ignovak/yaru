import React, { Component } from 'react';
import PostCard from './components/PostCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="list-unstyled">
          {this.props.posts.map((_, i) => <PostCard key={i} data={_} />)}
        </ul>
      </div>
    );
  }
}

export default App;
